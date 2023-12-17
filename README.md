# mt-jsx-template

This is a library and command line tool that allows you to write MTML (Movable Type Markup Language) in TSX.

## Usage

### Transpile .mtml.tsx to .mtml

```
$ npx mt-jsx-template source.mtml.tsx > template.mtml
```

### Transpile multiple files in a directory

```
$ npx mt-jsx-template source --outdir template
```

### Import MT Tag types

```
$ npm install --save-dev mt-jsx-template
```

and tsconfig.json

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "mt-jsx-template",
  }
}
```

![Screenshot](https://raw.githubusercontent.com/usualoma/mt-jsx-template/main/artwork/screenshot.jpg)