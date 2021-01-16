// A programming language is said to have First Class Functions when
// functions in that language are treated as any other variable

const x = 3;
const y = function(text) {
  return `This is the text: ${text}`;
}

console.log(x);
console.log(y('Heyy!'));