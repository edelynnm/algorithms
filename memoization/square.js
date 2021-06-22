let cache = []

const square = (n) => {
  let result = 0;

  if(cache[n] !== undefined) {
    return cache[n]
  }

  for (let i = 1; i <= n; i ++) {
    for( let j = 1; j <= n; j ++) {
      result += 1
    }
  }

  cache[n] = result;
  return result;
}

console.log(square(54647)) // executes slowly 
console.log(square(54647)) // fetched from cache
console.log(square(54647))
console.log(square(54647))
console.log(square(54647))
