const createOrderedCables = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
};

// [2, 5, 3, 8, 7, 4, 6, 9, 1] = 5
// [4,3,2,1] = 1
// [1,2,3] = 3

const givenCables = [2, 5, 3, 8, 7, 4, 6, 9, 1];
const orderedCables = createOrderedCables(givenCables.length);

const findConnections = (orderedCables, givenCables) => {
  const results = [];
  let cables = [...givenCables];
  let count = 0;

  for (let i = 0; i < orderedCables.length; i++) {
    const result = findMatch(orderedCables[i], cables) 

    if (result.status) {
      count += result.matches
      cables = result.remaining
    }

    if (i === givenCables.length - 1 || cables.length === 0) { //is end
      results.push(count);
      count = 0; //reset count
      cables = [...givenCables];
    }
  }

  return Math.max(...results);
};

const findMatch = (orderedCable, givenCables, j = 0, matches = 0) => {
  let remaining = [...givenCables]
  
  if (orderedCable === remaining[j]) {
    //if match found
    matches += 1;
    remaining = remaining.slice(j + 1);
    return {status: true, matches, remaining};
  } 

  if (j === givenCables.length - 1) {
    return {status: false}
  }
  
  return findMatch(orderedCable, givenCables, j + 1)
}

// console.log(findMatch(orderedCables[1], givenCables))
console.log(findConnections(orderedCables, givenCables));
