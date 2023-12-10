# mt-jsx-template

## Usage

### Transpile .mtml.tsx to .mtml

```
$ npx mt-jsx-template source.mtml.tsx
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