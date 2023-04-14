import { describe, it } from 'vitest'
import iterativelyWalk from '../src/index'

/**
 * @vitest-environment happy-dom
 */
describe('should', () => {
  it('exported', () => {
    const element = document.createElement('div')
    iterativelyWalk(element, (node: Node) => {
      /* eslint-disable no-console */
      console.log('node', node)
    })
  })
})
