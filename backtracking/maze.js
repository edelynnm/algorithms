const createGrid = (row, col, element, grid = []) => {
  if (grid.length === row) {
    return grid;
  }
  grid.push(createRow(col, element));
  return createGrid(row, col, element + row, grid);
};

const createRow = (col, element, arr = []) => {
  if (arr.length === col) {
    return arr;
  }

  arr.push(element);
  return createRow(col, element + 1, arr);
};

const connections = {
  0: [1, 3],
  1: [2],
  2: [],
  3: [4, 6],
  4: [5, 7],
  5: [],
  6: [],
  7: [8],
  8: [],
};

const maxRow = 3;
const maxCol = 3;
const maze = createGrid(maxRow, maxCol, 0);

function solveMaze(maze, currentPosition, connections, finish, path = [], visitedPath = []) {
  path.push(currentPosition);

  if (currentPosition === finish) {
    visitedPath.push(currentPosition);
    console.log("Path: ", path);
    console.log("Visited Path: ", visitedPath);
    return true;
  }

  visitedPath.push(currentPosition);

  for (let i = 0; i < connections[currentPosition].length; i++) {
    if (!visitedPath.includes(connections[currentPosition][i])) {
      if (solveMaze(maze, connections[currentPosition][i], connections, finish, path, visitedPath)) {
        return true;
      }
      
      path.pop();
    }
  }

  return false;
}

const start = 0;
const finish = 8;

solveMaze(maze, start, connections, finish);
// moving direction is right first
// since finish = 8, no need to check 6.

// if finish is 6 or 6 leads to finish:
solveMaze(maze, start, connections, 6);
