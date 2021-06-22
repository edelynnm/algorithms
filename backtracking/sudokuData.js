const nineByNine = [ // given
  {
    row: 1,
    col: 2,
    element: 2
  },
  {
    row: 1,
    col: 4,
    element: 6
  },
  {
    row: 1,
    col: 6,
    element: 8
  },
  {
    row: 2,
    col: 1,
    element: 5
  }, {
    row: 2,
    col: 2,
    element: 8
  },
  {
    row: 2,
    col: 6,
    element: 9
  },
  {
    row: 2,
    col: 7,
    element: 7
  },
  {
    row: 3,
    col: 5,
    element: 4
  },
  {
    row: 4,
    col: 1,
    element: 3
  },
  {
    row: 4,
    col: 2,
    element: 7
  }, {
    row: 4,
    col: 7,
    element: 5
  },
  {
    row: 5,
    col: 1,
    element: 6
  }, {
    row: 5,
    col: 9,
    element: 4
  },
  {
    row: 6,
    col: 3,
    element: 8
  }, {
    row: 6,
    col: 8,
    element: 1
  }, {
    row: 6,
    col: 9,
    element: 3
  },
  {
    row: 7,
    col: 5,
    element: 2
  },
  {
    row: 8,
    col: 3,
    element: 9
  },
  {
    row: 8,
    col: 4,
    element: 8
  }, {
    row: 8,
    col: 8,
    element: 3
  },
  {
    row: 8,
    col: 9,
    element: 6
  },
  {
    row: 9,
    col: 4,
    element: 3
  }, {
    row: 9,
    col: 6,
    element: 6
  }, {
    row: 9,
    col: 8,
    element: 9
  },
]

const randomSudoku = [ // palagpat
  {
    row: 1,
    col: 1,
    element:4
  },
  {
    row: 1,
    col: 3,
    element: 4
  },
  {
    row: 2,
    col: 2,
    element: 2
  },
  {
    row: 3,
    col: 2,
    element: 8
  },
  {
    row: 3,
    col: 3,
    element: 7
  },
  {
    row: 3,
    col: 8,
    element: 3
  }, {
    row: 3,
    col: 9,
    element: 1
  },
  {
    row: 4,
    col: 3,
    element:3
  }, {
    row: 4,
    col: 5,
    element: 1
  },
  {
    row: 4,
    col: 8,
    element: 8
  }, {
    row: 5,
    col: 1,
    element: 9
  }, {
    row: 5,
    col: 4,
    element: 8
  },
  {
    row: 5,
    col: 5,
    element: 6
  },
  {
    row:5,
    col: 6,
    element: 3
  },
  {
    row: 5,
    col: 9,
    element: 5
  }, {
    row: 6,
    col: 2,
    element: 5
  },
  {
    row: 6,
    col: 5,
    element: 9
  },
  {
    row: 6,
    col: 7,
    element: 6
  }, {
    row: 7,
    col: 1,
    element: 1
  }, {
    row: 7,
    col: 2,
    element: 3
  },
  {
    row: 7,
    col: 7,
    element: 2
  },{
    row: 7,
    col: 8,
    element: 5
  },{
    row: 8,
    col: 8,
    element: 7
  },{
    row: 8,
    col: 9,
    element: 4
  },{
    row: 9,
    col: 3,
    element: 5
  },{
    row: 9,
    col: 4,
    element: 2
  },{
    row: 9,
    col:6,
    element: 6
  },{
    row: 9,
    col: 7,
    element: 9
  },
]

const fourByFour = [
  {
    row: 1,
    col: 1,
    element: 1
  },
  {
    row: 2,
    col: 4,
    element: 4
  },
  {
    row: 3,
    col: 3,
    element: 2
  },
  {
    row: 4,
    col: 2,
    element: 3
  }
]

module.exports = {nineByNine, randomSudoku, fourByFour};
