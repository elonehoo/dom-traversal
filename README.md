# dom-traversal

## Install

```bash
# npm
npm install --save-dev @elonehoo/dom-traversal

# yarn
yarn add --dev @elonehoo/dom-traversal

# pnpm
pnpm install --save-dev @elonehoo/dom-traversal
```

## Usage

```typescript
import  iterativelyWalk  from '@elonehoo/dom-traversal'

iterativelyWalk(document.body.childNodes,function (node:Node){
  console.log("node", node)
})
```

## License

[MIT License](https://github.com/elonehoo/dom-traversal/blob/main/LICENSE) © 2022-PRESENT [Elone Hoo](https://github.com/elonehoo)
