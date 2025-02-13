# dom-traversal

[![NPM version](https://img.shields.io/npm/v/@elonehoo/dom-traversal?color=a1b858&label=)](https://www.npmjs.com/package/@elonehoo/dom-traversal)

> Iteratively walk any DOM node.

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
import iterativelyWalk from '@elonehoo/dom-traversal'

iterativelyWalk(document.body.childNodes, (node: Node) => {
  console.log('node', node)
})
```

## License

[MIT License](https://github.com/elonehoo/dom-traversal/blob/main/LICENSE) © 2022-PRESENT [Elone Hoo](https://github.com/elonehoo)
