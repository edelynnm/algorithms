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
    for (let j = 0; j < cables.length; j++) {
      if (orderedCables[i] === cables[j]) {
        //if match found
        count += 1;
        cables = cables.slice(j + 1);
        break;
      }
    }
    // console.log(count)

    if (i === givenCables.length - 1 || cables.length === 0) {
      //is end
      results.push(count);
      count = 0; //reset count
    }

    if (cables.length === 0) {
      cables = [...givenCables];
    }
  }

  return Math.max(...results);
};

console.log(findConnections(orderedCables, givenCables));
