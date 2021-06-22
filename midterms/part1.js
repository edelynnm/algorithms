const R = require('ramda');

const createGraph = (streetConnections) => {
  const graph = streetConnections.map((street) => ({
    [street[0]]: [street[1]],
  }));
  const connections = graph.reduce((acc, cur) =>
    R.mergeDeepWith(R.concat, acc, cur)
  );

  return connections;
};

const streetConnections = 
[
  [0, 2],
  [2, 1],
  [1, 0],
  [3, 0],
  [3, 1],
  [2, 4],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 3],
];

// [
//   [0, 1],
//   [1, 2],
// ];

const findPath = (goal, start = goal, path = []) => {
  const nextPath = graph[start];

  if(graph[start] === undefined) {
    noEnd = false
    return true
  }

  const hasReturned = nextPath.includes(goal)

  if (hasReturned) {
    return true;
  }

  for (let i = 0; i < nextPath.length; i++) {
    const current = nextPath[i];
    visited.push(current);

    if (findPath(goal, current, path)) {
      path.push(current);
      break;
    }
  }

  return  [goal, ...(noEnd ? visited : path)].length;
};

const graph = createGraph(streetConnections);
const visited = [];
let noEnd = true;

const start = 0

console.log(findPath(start));
