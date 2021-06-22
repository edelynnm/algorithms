const createGrid = require("./grid");
const {nineByNine, randomSudoku, fourByFour} = require("./sudokuData");
const N = 9

function generateBoard(templateBoard, numData) {
  numData.forEach((num) => {
    templateBoard[num.row - 1][num.col - 1] = num.element;
  });

  return templateBoard;
}

function viewSudokuBoard (board) {

  return board.map((x) => "| " + x.join(" | ") + " |");
}

function solver(board, row = 0, col = 0) {
  // if end
  if (isEnd(board, row, col)) {
    return true;
  }

  // if out of col boundary
  if (col === board[row].length) {
    return solver(board, row + 1, (col = 0));
  }

  // if cell is blank
  if (isEmpty(board, row, col)) {
    for (let i = 1; i <= N; i++) {
      if (isValid(board, row, col, i)) {
        board[row][col] = i;

        if (solver(board, row, col + 1)) { // move temporarily to next cell
          return true;
        }
      }
      board[row][col] = 0;
    }
    return false;
  }

  // move to next col if cell has given value
  return solver(board, row, col + 1); 
}

function isEnd(board, row, col) {
  if (col === board[row].length && row === board[row].length - 1) return true;
  return false;
}

function isEmpty(board, row, col) {
  if (board[row][col] === 0) return true;
  return false;
}

function isValid(board, row, col, i) {
  if (
    checkRow(board, row, i) &&
    checkCol(board, row, col, i) &&
    checkSubGrid(board, row, col, i)
  ) {
    return true;
  }
  return false;
}

function checkSubGrid(board, row, col, num) {
  const length = Math.sqrt(N)
  const startRow = row - (row % length);
  const startCol = col - (col % length);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[startRow + i][j + startCol] === num) return false;
    }
  }
  return true;
}

function checkRow(board, row, num) {
  if (board[row].includes(num)) {
    return false;
  }
  return true;
}

function checkCol(board, row, col, num) {
  for (let i = 0; i < board[row].length; i++) {
    if (board[i][col] === num) {
      return false;
    }
  }
  return true;
}

//main
const templateBoard = createGrid(N, N, 0);
const sudokuBoard = generateBoard(templateBoard, nineByNine);

console.log("GIVEN:");
console.log(viewSudokuBoard(sudokuBoard));

if (solver(sudokuBoard)) {
  console.log("SOLUTION");
  console.log(viewSudokuBoard(sudokuBoard));
} else {
  console.log("Cannot solve");
}