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
import { readFileSync, writeFileSync, statSync, opendirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { MasterCSS } from "@master/css";

const masterCSS = new MasterCSS();

registerJSXNodeClass(
  /^/,
  class extends JSXNode {
    toStringToBuffer(buffer: StringBuffer): void {
      this.props?.class?.split(/\s+/).forEach((c) => masterCSS.add(c));
      super.toStringToBuffer(buffer);
    }
  }
);

const argv = yargs(hideBin(process.argv))
  .command("$0 <files...>", "Process the specified files", (yargs) => {
    yargs.positional("files", {
      describe: "List of files to process",
      type: "string",
    });
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

for (let filename of argv.files) {
  filename = resolve(filename);
  const statRes = statSync(filename);
  if (statRes.isDirectory()) {
    const dh = opendirSync(filename);
    for await (const dirent of dh) {
      if (dirent.isFile() && dirent.name.match(/\.(?:tsx|jsx)$/)) {
        await processFile(resolve(filename, dirent.name));
      }
    }
  } else if (statRes.isFile()) {
    await processFile(filename);
  } else {
    throw new Error(`Unknown file type: ${filename}`);
  }
}

console.log(masterCSS.text);
