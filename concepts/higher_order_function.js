// Functions that operate on other functions,
// making them as arguments or returning them,
// are called Higher-Order Functions

// A function in JS is a HOF
function execute(fn, ...params) {
  return function(text) {
    return `${text}: ${fn(...params)}`;
  }
}

function sum(n1, n2) {
  return n1 + n2;
}

function product(n1, n2) {
  return n1 * n2;
}

console.log(execute(sum, 1, 2)('O resultado é'));
console.log(execute(product, 3, 2)('O resultado é'));
