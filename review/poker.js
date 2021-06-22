import rl from 'readline-sync';
import readCards from './readCards.js';

let cards = []

for (let count = 0; count < 5; count++) {
  const input = rl.question('Enter card: ')
  cards.push(input)
}

console.log(readCards(cards))