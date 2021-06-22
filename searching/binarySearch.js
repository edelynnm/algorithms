const arr = [10, 15, 17, 16, 57, 1, 5, 6, 7, 200, 4,
              3, 51, 67, 89, 88, 76, 23, 14, 65, 44,
              33, 22, 19, 25, 78, 68, 79] // 

const divide = (arr) => Math.ceil((arr.length - 1) / 2);

const search = (arr, val, currentArr) => {
  const safeRange = 2

  currentArr = currentArr === undefined ? arr : currentArr
  const middleIndex = divide(currentArr)

  console.log(currentArr)

  if (currentArr[middleIndex] === val) {
    return currentArr[middleIndex]
  } 

  if (currentArr.length <= safeRange && !currentArr.includes(val)) {
    return "No match found"
  }

  if (currentArr[middleIndex] < val) {
     // get right
    currentArr = currentArr.slice(middleIndex)
  } else if (currentArr[middleIndex] > val) { 
    // get left
    currentArr = currentArr.slice(0, middleIndex)
  }

  return search(arr, val, currentArr)
}

const binarySearch = (arr, val, isNumber = true) => {
  const comparator = (x,y) => x - y ;
  const sorted = isNumber ? arr.sort(comparator) : arr.sort()
  return search(sorted, val)
}

// console.log(binarySearch(arr, 1))

module.exports = binarySearch
