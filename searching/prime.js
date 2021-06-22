const createArr = (N) => {
  let results = []

  for(let i = 0; i <= N; i++) { // n + 1
    results.push(true)
  }

  return results
}

const trimPrimes = (arr, index, increment) => { // falsify non-primes
  if(index > arr.length) {
    return arr
  }

  arr[index] = false 
  return trimPrimes(arr, index + increment, increment) 
}

const getPrime = (arr) => {
  const i = Math.round(Math.sqrt(arr.length - 1))
  
  let trimmed;
  let primes = []

  for (let index = 0; index < arr.length; index++) {
    
    if(index === i) { // base case
      trimmed = arr
      break
    }

    if([0,1].includes(index)) {
      arr[index] = false
    } else {
      arr = trimPrimes(arr, index, index) 
    }
  }
 
  trimmed.forEach((e, num) => { 
    if(e) {
      primes.push(num)
    }
  })

  return primes
}

const N = 25
const searchingArr = createArr(N)

console.log(getPrime(searchingArr))
