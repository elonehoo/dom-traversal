let slice = Array.prototype.slice

function iterativelyWalk (nodes:any,cb:Function){
  if (!('length' in nodes)) {
    nodes = [nodes]
  }

  nodes = slice.call(nodes)

  while(nodes.length) {
    var node:Document = nodes.shift()!,
        ret = cb(node)

    if (ret) {
        return ret
    }

    if (node!.childNodes && node!.childNodes.length) {
        nodes = slice.call(node!.childNodes).concat(nodes)
    }
  }
}

export default iterativelyWalk
