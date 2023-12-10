import fetch from "node-fetch";
import * as cheerio from "cheerio";

const header = `
import type { Child } from "./index";

declare global {
  namespace MTJSXTemplate {
    interface BlockElement {
      children?: Child;
    }
`;

const footer = `
  }
}

export interface MTTags extends MTJSXTemplate.MTTags {}
`;

const getGlobalModifier = async () => {
  const url =
    "https://www.movabletype.jp/documentation/appendices/modifiers/index.html";
  const html = await (await fetch(url)).text();
  const $ = cheerio.load(html);

  const header = `
  interface GlobalModifier {
`;

  const footer = `
  }
`;
  const list = $("h2 > a:first-child")
    .map(
      (_, el) => `
    /**
     * ${$(el).parent().parent().find("p").text()}
     * @see ${$(el).attr("href")}
     */
    ${$(el).text()}?: string;
    `
    )
    .get();
  list.push("to_json?: string;");

  return header + list.join("\n") + footer;
};

const extraModifiers = {
  MTEntryAssets: `
  file_ext?: ("jpg" | "jpeg" | "gif" | "png" | string)[] | string;
  `,
};
const getTag = async () => {
  const url =
    "https://www.movabletype.jp/documentation/appendices/tags/index.html";
  const html = await (await fetch(url)).text();
  const $ = cheerio.load(html);

  const header = `
  interface MTTags {
`;

  const footer = `
  }
`;

  const nameToType = {
    limit: "number",
    lastn: "number",
    offset: "number",
    width: "number",
    height: "number",
    sort_order: "'ascend' | 'descend'",
  };
  const list: string[] = [];
  for (const el of $("h2 > a:first-child").get()) {
    const url = $(el).attr("href");
    if (!url) {
      continue;
    }
    // if (!url.match(/archivelist.html$|entries.html$|property.html$|entryassets.html$/)) {
    //   continue;
    // }
    const detailHtml = await (await fetch(url)).text();
    const $detail = cheerio.load(detailHtml);
    const name = $detail(".name").text();
    const description = $detail(".entry-body p").text();
    const isBlock = $detail(".entry-detail .labels .block").length > 0;
    const seen = {};
    let modifiers = $detail(".entry-modifier dt")
      .map((_, el) => {
        const names = $detail(el)
          .text()
          .match(/(\w+)(?==)/g);
        const $dd = $detail(el).next();
        const description = $dd.find("p").text();
        return names?.map((name) => {
          if (seen[name]) {
            return "";
          }
          seen[name] = true;
          let types = $dd
            .find("ul li")
            .map((_, el) =>
              $detail(el)
                .text()
                .replace(/\s.*/, "")
                .replace(/\w+="(\w+)"/, "$1")
            )
            .get()
            .map((t) => `"${t}"`)
            .join(" | ");
          if (types) {
            types += `| string`;
          }
          const type = types || nameToType[name] || "string";
          return `
          /**
           * ${description}
           */
          ${name}?: ${type};`;
        });
      })
      .get()
      .join("\n");
    if (extraModifiers[name]) {
      modifiers += extraModifiers[name];
    }

    for (const n of [name.replace(/^MT/, "mt:")]) {
      list.push(`
      /**
       * ${description}
       * @see ${url}
       */
      ["${n}"]: {${modifiers}} & GlobalModifier ${
        isBlock ? " & BlockElement" : ""
      };`);
    }
  }

  return header + list.join("\n") + footer;
};

console.log(header + (await getGlobalModifier()) + (await getTag()) + footer);
