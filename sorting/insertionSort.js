const swap = require("./swap")

const sort = (arr) => {
  for (let i = 1; i < arr.length; i++) {            // n + 1
    let leftArr = arr.slice(0, i)                   // n
    for (let j = 0; j < leftArr.length; j++) {      // n((n-(n-1)) + 1)
      if (arr[i] < leftArr[j]) {
        arr = swap(arr, j, i)                       // 3n
      }
    }
    console.log(arr);
  }

  return arr;                                        // n
};

const arr = [2, 8, 5, 4, 3, 1];
console.log(sort(arr));
