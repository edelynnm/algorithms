const given = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

// [
//   [1, 3, 2, 1],
//   [5, 3, 2, 1],
//   [1, 7, 3, 1],
//   [1, 3, 1, 1],
// ];

// [
//   [1, 0, 6],
//   [8, 3, 7],
//   [2, 4, 9],
// ];

const path = [];

const findPath = (matrix, row = 0, col = 0, rightSum = 0, bottomSum = 0) => {
  const maxRowIndex = matrix.length - 1;
  const maxColIndex = matrix[maxRowIndex].length - 1;

  const currentPosition = matrix[row][col];
  path.push([row, col]);

  if (isEnd(maxRowIndex, maxColIndex, row, col)) {
    return path;
  }

  if (col + 1 <= maxColIndex) {
    //if can move Right
    rightSum = currentPosition + matrix[row][col + 1];
  }

  if (row < maxRowIndex) {
    //if can move Down
    bottomSum = currentPosition + matrix[row + 1][col];
  }

  if (rightSum > bottomSum || row === maxRowIndex) {
    // move right
    col += 1;
  } else if (bottomSum >= rightSum) {
    //move Down
    row += 1;
  }

  return findPath(matrix, row, col, 0, 0);
};

const isEnd = (maxRowIndex, maxColIndex, row, col) => {
  if (row === maxRowIndex && col === maxColIndex) {
    return true;
  }
  return false;
};

console.log(findPath(given));
