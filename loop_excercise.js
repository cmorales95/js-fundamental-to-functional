const game = {
  'suspects': [
    {
      name: 'Rusty',
      color: 'orange'
    },
    {
      name: 'Miss Scarlet',
      color: 'Red',
    }
  ]
};

console.log('way #1');
for (let {name, color} of game.suspects) {
  console.log(name, color);
}

console.log('way #2');
for (let i = 0; i < game.suspects.length; i++) {
  console.log(game.suspects[i].name, game.suspects[i].color);
}

console.log('way #3');
game.suspects.forEach(({name, color}) => {
  console.log(name, color);
});

console.log('practice with "in" clause');
const numbers = [1, 2, 3, 4, 5];
for (let number in numbers) {
  console.log(number);
}