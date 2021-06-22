import readline from 'readline-sync';

const number = Number(readline.question('Enter number: '))
let result = ""

function addCascade (number, row) {
  let result = ""
  for (let i = number - row; i > 0; i--) {
    result += " "
  }
  return result;
}

function mainArea (number, row, isTop) {
  let result = "";
  for (let col = 0; col < number; col++) {
    if (col > 0 && col < number - 1 && row > 1) {
      result += isTop ? "/" : " "
    } else {
      result += ":"
    }
  }
  return result;
}

function top(number) {
  for (let row = 1; row < number; row++) {
    result += addCascade(number, row)
    result += mainArea(number, row, true)
    
    for (let sideCol = row - 1; sideCol > 0; sideCol--) {
      if (sideCol > 1) {
        result += "X"
      } else {
        result += ":"
      }
    }
    result += "\n"
  }
}

function bottom(number) {
  for (let row = 1; row < number; row++) {
    result += mainArea(number, row, false)
    // side
    for (let sideCol = 0; sideCol < number - row; sideCol++) {
      const maxSideArea = number - row - 1
      if (sideCol < maxSideArea) {
        result += "X"
      } else {
        result += ":"
      }
    }
    result += "\n"
  }
  result +=addBorder(number)
}

function addBorder (number) {
  return ":".repeat(number);
}

function printCube(number) {
  top(number)
  bottom(number)
}

printCube(number)
console.log(result)