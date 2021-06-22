const swap = (arr, currentIndex, toSwapIndex) => {
  const current = arr[currentIndex];
  arr[currentIndex] = arr[toSwapIndex];
  arr[toSwapIndex] = current;
  return arr;
};

module.exports = swap;