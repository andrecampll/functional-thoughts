// function composition(fn1, fn2) {
//   return function(value) {
//     return fn2(fn1(value));
//   }
// }

function composition(...fns) {
  return function(value) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, value);
  }
}

function scream(text) {
  return text.toUpperCase();
}

function shout(text) {
  return `${text}!!!!`;
}

function slow(text) {
  return text.split('').join(' ');
}

const result = composition(
  scream,
  shout,
  slow
)('hey');

console.log(result);
