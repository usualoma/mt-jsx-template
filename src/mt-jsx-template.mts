#!/usr/bin/env node

import {
  lastCreatedNode,
  registerJSXNodeClass,
  JSXNode,
  StringBuffer,
} from "./index";
import { resolve, dirname } from "node:path";
import { tmpdir } from "node:os";
import * as esbuild from "esbuild";
import {
  readFileSync,
  writeFileSync,
  statSync,
  opendirSync,
  mkdir,
} from "node:fs";
import { fileURLToPath } from "node:url";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

registerJSXNodeClass(
  /^mt/,
  class extends JSXNode {
    toStringToBuffer(buffer: StringBuffer): void {
      if (
        !this.children?.length &&
        !(this.tag as string).match(/(?:EntryBody|EntryMore|Else)$/i) &&
        !Object.keys(this.props || {}).some((k) => k.startsWith("encode_"))
      ) {
        this.props ||= {};
        this.props.encode_html = "1";
      }
      super.toStringToBuffer(buffer);
      if (!this.children?.length) {
        buffer[0] = (buffer[0] as string).replace(/<[^>]+>$/, "");
      }
    }
  }
);

const argv = yargs(hideBin(process.argv))
  .command("$0 [files...]", "Process the specified files")
  .option("outdir", {
    alias: "o",
    describe: "Output directory",
    type: "string",
  })
  .option("escape-exclude", {
    alias: "e",
    describe: "Exclude tags for automatic escape_html",
    type: "string",
  })
  .help()
  .alias("help", "h").argv;

async function processFile(filename: string): Promise<string> {
  const tmpDir = tmpdir();
  const tmpfile = resolve(tmpDir, "tmp.mjs");
  const outfile = resolve(tmpDir, "out.mjs");
  await esbuild.build({
    entryPoints: [filename],
    outfile: tmpfile,
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react-jsx",
        jsxImportSource: resolve(dirname(fileURLToPath(import.meta.url))),
      },
    },
  });
  const tmpContent = readFileSync(tmpfile, "utf8");
  writeFileSync(
    outfile,
    tmpContent.replace(/\/jsx-runtime"/, '/jsx-runtime.mjs"')
  );
  await import(outfile);

  if (!lastCreatedNode) {
    throw new Error("Template import failed");
  }
  const template = lastCreatedNode;

  return (await template.toString()).toString();
}

const files = argv.files || [];
if (!files.length) {
  // read content from stdin and store it in a temporary file
  const tmpDir = tmpdir();
  const tmpfile = resolve(tmpDir, "tmp.jsx");
  writeFileSync(tmpfile, readFileSync("/dev/stdin", "utf8"));
  files.push(tmpfile);
}
for (let filename of files) {
  filename = resolve(filename);
  const statRes = statSync(filename);
  if (statRes.isDirectory()) {
    if (!argv.outdir) {
      console.error(`Output directory not specified`);
      process.exit(1);
    }
    mkdir(argv.outdir, { recursive: true }, (err) => {
      if (err) throw err;
    });
    const dh = opendirSync(filename);
    for await (const dirent of dh) {
      if (dirent.isFile() && dirent.name.match(/\.(?:tsx|jsx)$/)) {
        const content = await processFile(resolve(filename, dirent.name));
        const outfile = resolve(argv.outdir, dirent.name.replace(/\.tsx$/, ""));
        writeFileSync(outfile, content);
      }
    }
  } else if (statRes.isFile()) {
    console.log(await processFile(filename));
  } else {
    throw new Error(`Unknown file type: ${filename}`);
  }
}
