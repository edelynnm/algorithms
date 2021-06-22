import R from 'ramda';

const conversion = {
  'A': 1,
  'J': 11,
  'Q': 12,
  'K': 13
}

function refineInput(input, conversion) {
  let card;

  if (Object.keys(conversion).includes(input)) {
    card = conversion[input]
  } else {
    card = Number(input)
  }
  return card;
}

function sortCards(cards) {
  return cards.sort((x, y) => x - y)
}

function getCards(input) {
  const result = []

  input.map(e => {
    const card = refineInput(e, conversion)
    result.push(card)
  })

  return sortCards(result);
}

function readCards(input) {
  const cards = getCards(input)
  const result = (R.countBy(R.identity)(cards))
  const values = Object.values(result)
  const byPairs = R.countBy(R.identity)(values)
  const numOfPairs = byPairs['2']

  if (values.includes(5)) {
    return 'Impossible'
  } else if (values.includes(4)) {
    return 'Four of a Kind'
  } else if (values.includes(3) && !values.includes(2)) {
    return 'Three of a Kind'
  } else if (values.includes(3) & values.includes(2)) {
    return 'Full House'
  } else if (numOfPairs === 2) {
    return 'Two Pairs'
  } else if (numOfPairs === 1) {
    return 'One Pair'
  } else if (isConsecutive(cards)) {
    return 'Straight'
  } else {
    return 'Nothing'
  }
}

function isConsecutive(cards) {
  let result = []
  cards.reduce((acc, val) => {
    if (acc === 0) {
      acc = val
    }

    if (acc + 1 === val || (acc === 1 && cards.includes(13))) {
      result.push(true)
      acc = val
    } else {
      result.push(false)
    }

    return acc;
  })

  return (result.every(e => e === true));
}

export default readCards;