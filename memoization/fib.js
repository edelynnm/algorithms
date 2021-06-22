const fib = (n, cache = []) => {
  let result = 0

  if (cache[n] !== undefined) {
    return cache[n]
  }

  if (n < 3) {
    return 1
  } 

  result = fib(n-1, cache) + fib(n-2, cache)
  cache[n] = result
  return result
}

console.log(fib(100))
console.log(fib(100))
console.log(fib(100))
console.log(fib(100))
