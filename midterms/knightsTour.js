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
    console.log("| " + formatted.join(" | ") + " |");
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

const getAvailableSpace = (nextRow, nextCol, index) => { // check space of single next move
  let space = 0

  possibleMoves.forEach(({row, col}) => { // 8n
    let checkRow = nextRow + row;
    let checkCol = nextCol + col;

    if(isValid(checkRow, checkCol) && isNotVisited(checkRow ,checkCol)) { // if there is an available space
      space += 1
    }
  })

  return {space, index};
};

const getMinimumMoves = (startRow, startCol) => {
  let available = []

  possibleMoves.forEach(({row, col}, i) => {
    let nextRow = row + startRow;
    let nextCol = col + startCol;

    if (isValid(nextRow, nextCol) && isNotVisited(nextRow, nextCol)) {
      available.push(getAvailableSpace(nextRow,nextCol, i))
    }
  })

  return available.sort((acc, cur) => acc.space - cur.space) // sort by min
}

const findPaths = (startRow, startCol, moveCount) => { // n(n + 1)
  // if all squares has been visited
  if (moveCount === (N * N) + 1) {
    return true;
  }

  const availableSpaces = getMinimumMoves(startRow, startCol)[0]

  for (let i = 0; i < possibleMoves.length; i++) {
    let nextRow = possibleMoves[i].row + startRow;
    let nextCol = possibleMoves[i].col + startCol;

    if (isValid(nextRow, nextCol) && isNotVisited(nextRow, nextCol) && i === availableSpaces.index) {

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

const N = 20
const visitedMatrix = createMatrix(N);

solveMatrix();
