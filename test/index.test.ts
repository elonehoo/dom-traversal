import { describe, it } from 'vitest'
import  iterativelyWalk  from '../src/index'

/**
 * @vitest-environment happy-dom
 */
describe('should', () => {
  it('exported', () => {
    const element = document.createElement("div");
    iterativelyWalk(element,function (node:any){
      console.log("node", node)
    })
  })
})
