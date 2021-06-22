
const partition = (arr, pivot) => {


  left = arr.slice(0,pivot)
  right = arr.slice(pivot)
  return [left, right]
}

const merge = (l,r, result = []) => {

  if (l.length > 0 && r.length > 0 ) {
    if(l[0] <= r[0]) {
      result.push(l.shift())
    } else {
      result.push(r.shift())
    }
    return merge(l,r,result)
  }

  return [...result, ...r, ...l] //attach remaining
}

const quickSort = (arr) => {
  let pivot = Math.floor(arr.length / 2)

  if(arr.length <= 1) {
    return arr // indiv element
  }

  const [left, right] = partition(arr, pivot) //splits on pivot
  const l = quickSort(left)
  const r = quickSort(right)
  // console.log(l, 'left')
  // console.log(r, 'right')
  console.log('PIVOT:', arr[pivot])

  console.log('MERGE: '+ l + '  |  ' + r)

  return merge(l, r)
}
const arr = [30,20,10,5,2,3]

console.log(quickSort(arr ))
