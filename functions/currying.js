//Currying challenge (#1)

const power = (base) => (exp) => Math.pow(base, exp);

console.log(power(2)(8));

function sum(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
};

console.log(sum(1)(2)(3))

function calculate(x) {
  return function(y) {
    return function(fn) {
      return fn(x, y);
    };
  };
};

console.log(calculate(30)(2)((x, y) => (x / y)));
