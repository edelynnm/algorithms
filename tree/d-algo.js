const graph = [
  {from: 1, to: 2, weight: 5},
  {from: 1, to: 3, weight: 1},
  {from: 2, to: 4, weight: 7},
  {from: 2, to: 5, weight: 1},
  {from: 2, to: 6, weight: 6},
  {from: 3, to: 2, weight: 2},
  {from: 3, to: 5, weight: 7},
  {from: 3, to: 4, weight: 6},
  {from: 4, to: 3, weight: 7},
  {from: 4, to: 6, weight: 4},
  {from: 4, to: 7, weight: 6},
  {from: 5, to: 4, weight: 3},
  {from: 5, to: 6, weight: 5},
  {from: 5, to: 7, weight: 9},
  {from: 6, to: 2, weight: 7},
  {from: 6, to: 7, weight: 2}
];

function extractVertices (graph) {
  let vertices = []

  graph.forEach((connection) => {
    if(!vertices.includes(connection.from)) {
      vertices.push(connection.from)
    }

    if(!vertices.includes(connection.to)) {
      vertices.push(connection.to)
    }
  })

  return vertices
}

function getMin (arr) {
  let least;
  for(let i =0; i < arr.length; i++) {
    if(!least || arr[i].weight < least.weight) {
      least = arr[i]
    }
  }
  return least
}

function findMST (graph, startingVertex) {
  const vertices = extractVertices(graph)
  const distance = Array(vertices.length).fill(Infinity) 
  distance[0] = { vertex: 1, bestDist: 0 }

  for(let i = 0; i < vertices.length; i++) {
    const vertexConnections = graph.filter((connection) => connection.from === startingVertex)

    vertexConnections.forEach((x) => {
      const index = x.to - 1
      const newBestDist = x.weight + distance[(x.from - 1)].bestDist 
      if(distance[index] !== Infinity) {
        if(distance[index].bestDist > newBestDist) {
          distance[index] = { vertex: x.to, bestDist: newBestDist }
        }
      } else {
        distance[index] = { vertex: x.to, bestDist: newBestDist }
      }
    })

    // console.log(distance)

    startingVertex++ // works only if starting vertex is the lowest vertex
  }
  return distance
}

console.log(findMST(graph, 1))

