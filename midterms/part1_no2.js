const connections = {
  'K': ['X', 'J'],
  'J': ['K', 'N'],
  'N': ['J', 'X', 'L', 'M'],
  'X': ['K', 'N', 'Y'],
  'M': ['N', 'I'],
  'Y': ['X', 'L'],
  'L': ['N', 'I', 'Y'],
  'I': ['M', 'L'],
  'A': ['Z', 'Z', 'Z'],
  'Z': ['A', 'A', 'A'],
  'F': ['E', 'B', 'P'],
  'E': ['F', 'P'],
  'P': ['B', 'F', 'E'],
  'B': ['F', 'P'],
};

const sortConnections = (connections) => {
  const sortedArr = Object.entries(connections).sort()
  return sortedArr.map((arr) => ({[arr[0]]: arr[1]}))
}

const sortedConnections = sortConnections(connections)
/**
 [
    { A: [ 'Z', 'Z', 'Z' ] },
    { B: [ 'F', 'P' ] },
    { E: [ 'F', 'P' ] },
    { F: [ 'E', 'B', 'P' ] },
    { I: [ 'M', 'L' ] },
    { J: [ 'K', 'N' ] },
    { K: [ 'X', 'J' ] },
    { L: [ 'N', 'I', 'Y' ] },
    { M: [ 'N', 'I' ] },
    { N: [ 'J', 'X', 'L', 'M' ] },
    { P: [ 'B', 'F', 'E' ] },
    { X: [ 'K', 'N', 'Y' ] },
    { Y: [ 'X', 'L' ] },
    { Z: [ 'A', 'A', 'A' ] }
  ]
 */

