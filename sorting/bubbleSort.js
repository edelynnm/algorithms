const swap = (array, currentIndex) => {
  const clone = [...array]

  array[currentIndex] = clone[currentIndex + 1]
  array[currentIndex + 1] = clone[currentIndex]

  return array
}

const checkOrder = (array) => {
  for(let i = 1; i < array.length ; i++) {
    if (array[i - 1] > array[i]){
      return false
    }
  }

  return true
}

const sort = (array) => {

  for (let i = 1; i < array.length; i++) {
    if (checkOrder(array)) {
      return
    }

    for (let next = 1; next < array.length; next++) {
      const currentIndex = next - 1

      if (array[currentIndex] > array[next]) {
        array = swap(array, currentIndex)
      }
    }

    console.log(array)
  }
}

const array = [1,2,5,7,8,3,6,4]
sort(array)