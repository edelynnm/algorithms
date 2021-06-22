const createMatrix = (N) => {
  const result = [];

  for (let col = 0; col < N; col++) {
    let rowResult = [];
    for (let row = 0; row < N; row++) {
      rowResult.push(null);
    }
    result.push(rowResult);
  }

  return result;
};

const printMatrix = (matrix) => {
  matrix.forEach((row) => {
    const formatted = row.map((e) => e.toString().padEnd(3));
    console.log(" | " + formatted.join(" | ") + "|");
  });
};

const possibleMoves = [
  { row: 1, col: 2 },
  { row: 1, col: -2 },
  { row: 2, col: 1 },
  { row: 2, col: -1 },
  { row: -1, col: 2 },
  { row: -1, col: -2 },
  { row: -2, col: 1 },
  { row: -2, col: -1 },
];

const isValid = (row, col) => {
  // if outside of board bounds
  if (row < 0 || col < 0 || row >= N || col >= N) {
    return false;
  }
  return true;
};

const isNotVisited = (nextRow, nextCol) =>
  visitedMatrix[nextRow][nextCol] == null;

const findPaths = (startRow, startCol, moveCount) => {
  // if all squares has been visited
  if (moveCount === N * N + 1) {
    return true;
  }

  for (let i = 0; i < possibleMoves.length; i++) {
    // loops 8 times
    let nextRow = possibleMoves[i].row + startRow;
    let nextCol = possibleMoves[i].col + startCol;

    if (isValid(nextRow, nextCol) && isNotVisited(nextRow, nextCol)) {
      visitedMatrix[nextRow][nextCol] = moveCount;
      if (findPaths(nextRow, nextCol, moveCount + 1)) {
        return true;
      }
      visitedMatrix[nextRow][nextCol] = null;
    }
  }
  return false;
};

const solveMatrix = () => {
  let moveCount = 1; // initialize move count
  const startRow = 0;
  const startCol = 0;
  visitedMatrix[startRow][startCol] = moveCount; // starting position, can be randomized
  const hasSolution = findPaths(startRow, startCol, moveCount + 1);
  if (!hasSolution) {
    return console.log("No solution");
  }

  return printMatrix(visitedMatrix);
};

const N = 5;
const visitedMatrix = createMatrix(N);

solveMatrix();
