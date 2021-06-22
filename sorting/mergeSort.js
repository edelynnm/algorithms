const partition = (arr) => { // 1/2 - because the passed array is simply split into 2.
  const middle = Math.floor(arr.length / 2)

  left = arr.slice(0,middle)
  right = arr.slice(middle)
  console.log(left + '  |  ' + right)

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

  return [...result, ...r, ...l] // On 
}

const mergeSort = (arr) => {  // O(nlog2n) + 1 - extra +1 due to conditional checking if base case
  // let 2^k = n; n = 8
  //     k = log 2 n
  //     k = 3
  //     n = 2^3 / 2 = 8 / 2 = 4 
  // the array is exponentially divided into 2 until length === 1

  if(arr.length <= 1) {
    return arr // 1
  }
  
  const [left, right] = partition(arr) // n/2
  const l = mergeSort(left) 
  const r = mergeSort(right) 
  console.log('CONQUER:  '+ l + '  |  ' + r)
  return merge(l, r) // O(n)
}

const arr = [30,20,10,5,2]

console.log(mergeSort(arr))
