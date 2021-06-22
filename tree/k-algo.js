const graph = [
  {parent: 1, child: 2, weight: 28},
  {parent: 1, child: 6, weight: 10},
  {parent: 2, child: 7, weight: 14},
  {parent: 2, child: 3, weight: 16},
  {parent: 3, child: 4, weight: 12},
  {parent: 4, child: 7, weight: 18},
  {parent: 4, child: 5, weight: 22},
  {parent: 7, child: 5, weight: 24},
  {parent: 5, child: 6, weight: 25},
]

const verticesTable = {
  1:0,
  2:1,
  3:2,
  4:3,
  5:4,
  6:5,
  7:6
}

function getRootNode (vertex, verticesTable) { // NO PATH COMPRESSION
  let verticesArr = Object.entries(verticesTable)
  let vertexIndex = verticesArr.findIndex((x)=> x[0] == vertex)
  let vertexId = verticesTable[vertex]

  if(vertexId === vertexIndex) {
    return vertexId // root
  }

  return getRootNode (verticesArr[vertexId][0], verticesTable) // use id as index
}

// console.log(getRootNode(4, verticesTable2))

function changeRoot (newRoot, vertex, verticesTable) {

  
}

function findMST (graph, verticesTable) { 
  const minGraph = graph.sort((x,y) => x.weight - y.weight)
  let validPath = []

  for(let i = 0; i < minGraph.length - 1; i++) {
    let parent = minGraph[i].parent
    let child = minGraph[i].child
    
    /*

      NO PATH COMPRESSION

      let parentRoot = getRootNode(parent, verticesTable)
      let childRoot = getRootNode(child, verticesTable)

      if(parentRoot !== childRoot) { // get root node of each and check if equal
        verticesTable[child] = verticesTable[parent]
        validPath.push(minGraph[i])
      }

    */

    if(verticesTable[child] !== verticesTable[parent]){
      // find everything that has root the same as child and change to parent
      let childID = verticesTable[child]
      
      for(const key in verticesTable) {
        if(verticesTable[key] == childID) {
          verticesTable[key] = verticesTable[parent]
        }
      }
      
      validPath.push(minGraph[i])
    }

    console.log(verticesTable) // shows the vertices' ids
  }

  return validPath
}

function getMSTWeight (mstPath) {
  return mstPath.reduce((x,y) =>{
    x += y.weight
    return x
  }, 0)
}

const MSTPath = findMST(graph, verticesTable)

console.log(MSTPath)
console.log('Total Weight:', getMSTWeight(MSTPath))


