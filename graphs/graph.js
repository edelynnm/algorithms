const graph = [
  [1, 0, 2],
  [0, 5, 0],
  [3, 0, 4],
];

const costs = [
  {from: 1, to: 2, cost: 7},
  {from: 1, to: 3, cost: 7},
  {from: 1, to: 4, cost: 3},
  {from: 2, to: 4, cost: 5},
  {from: 3, to: 2, cost: 5},
  {from: 4, to: 5, cost: 1},
  {from: 4, to: 3, cost: 2},
  {from: 5, to: 2, cost: 4},
];

function cost(col, destination, graph) {
  for (let row = 0; row < graph.length; row++) {
    if (graph[row][col] === destination) {
      const connections = costs.filter((connection) => connection.from === destination)
      // Math.min(...connections.map(x => x[2]))

      let leastCost = null
      for(let i = 0; i < connections.length; i++) {
        if(leastCost === null || leastCost.cost > connections[i].cost) {

          leastCost = connections[i]
        }
      }

      return leastCost
    }
  }
}

function findAllshortestPath (graph) {
  for(let row = 0; row < graph.length; row++) {
    for(let col = 0; col < graph[row].length; col++) {
      if(graph[row][col] !== 0) {
        console.log(cost(col, graph[row][col], graph))
      }
    }
  }
}

findAllshortestPath(graph)


