const letters = [['H', 'e'], ['l', ['l'], 'o']];

const flatLetters = letters.flat(Infinity);

const result = flatLetters
  .map(letter => letter.toUpperCase())
  .reduce((a, b) => a + b);

console.log(result);
