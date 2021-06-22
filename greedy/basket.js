const objs = [
  {
    type: "Lettuce",
    profit: 10,
    weight: 5,
  },
  {
    type: "Apple",
    profit: 5,
    weight: 2,
  },
  {
    type: "Pechay",
    profit: 2,
    weight: 1,
  },
  {
    type: "Squash",
    profit: 8,
    weight: 3,
  },
  {
    type: "Bell Pepper",
    profit: 2,
    weight: 4,
  },
  {
    type: "Okra",
    profit: 7,
    weight: 6,
  },
  {
    type: "Cucumber",
    profit: 1,
    weight: 1,
  },
];

const maxWeight = 15;

const getProfitPerWeight = (profit, weight) =>
  Number((profit / weight).toFixed(2));
const withProfitPerWeight = objs.map((obj) => ({
  ...obj,
  profitPerWeight: getProfitPerWeight(obj.profit, obj.weight),
}));
const byProfitPerWeight = withProfitPerWeight.sort(
  (a, b) => b.profitPerWeight - a.profitPerWeight
);

const getOptimalObjs = (objs) => {
  const objsToBring = [];
  let remainingWeight = maxWeight;

  for (let i = 0; i < objs.length; i++) {
    let currentObj = objs[i];
    remainingWeight -= currentObj.weight;

    if (remainingWeight < 0) {
      currentObj.weight += remainingWeight;
      objsToBring.push(currentObj);
      return objsToBring;
    }

    objsToBring.push(currentObj);
  }
};

const optimalObjs = getOptimalObjs(byProfitPerWeight);
const maxProfit = optimalObjs.reduce((acc, current) => {
  current.profit = current.weight * current.profitPerWeight;
  return acc + current.profit;
}, 0);

const getItems = (optimalObjs) =>
  optimalObjs.map(
    (obj) =>
      `${obj.weight}kg - ${obj.type} - PHP ${obj.profitPerWeight.toFixed(2)}/kg = PHP ${obj.profit.toFixed(2)}`
  );

console.log(getItems(optimalObjs).join('\n'));
console.log(`Total Max Profit: ${Number(maxProfit.toFixed(2))}`);
