const x = 3;

function out() {
  const x = 97;

  return function sumXPlus3() {
    return x + 3;
  }
}

module.exports = out();
