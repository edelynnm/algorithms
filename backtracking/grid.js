const createGrid = (row, col, element, increment = false, grid = []) => {
  if(grid.length === row) {
    return grid
  }
  grid.push(createRow(col, element, increment))

  if (increment) {
    element += row
  }
  return createGrid(row,col,element, increment, grid)
}

const createRow = (col, element, increment, arr = []) => {
  if (arr.length === col) {
    return arr
  }

  arr.push(element)

  if (increment) {
    element += 1
  }
  return createRow(col, element, increment, arr)
}

module.exports = createGrid;