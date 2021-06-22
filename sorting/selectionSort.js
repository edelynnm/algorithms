const swap = require('./swap')

const sort = (arr) => {

  for (let i = 0; i < arr.length; i++) {

    let currentIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[currentIndex]) {
        currentIndex = j
      }
    }

    arr = swap(arr, i, currentIndex)
    // console.log(arr);
  }

  return arr;
};

const arr = [2, 8, 5, 4, 3, 1];
console.log(sort(arr));
