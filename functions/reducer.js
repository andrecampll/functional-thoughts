const array = [1,2,3,4,5];

const reduced = array.reduce((acc, el) => acc + el);

// console.log(reduced);

const cart = [
  { name: 'Pencil', quantity: 10, price: 7.99, fragile: true},
  { name: 'Printer', quantity: 2, price: 30.99, fragile: true},
  { name: 'Book', quantity: 14, price: 4.99, fragile: false},
  { name: 'Pen', quantity: 20, price: 9.99, fragile: false},
  { name: 'Scissors', quantity: 6, price: 1.99, fragile: true},
];

const totalGeral = cart
  .map((product) => product.quantity * product.price)
  .reduce((acc, el) => acc + el, 1000);

// console.log(totalGeral);

// 1. fragile: true
// 2. price * quantity = total
// 3. median

const fragiles = cart.filter(product => product.fragile);

console.log(fragiles);

const total = cart
  .map((product) => product.quantity * product.price)
  .reduce((acc, el) => acc + el);

console.log(total);

Array.prototype.myReducer = function(fn, initialValue) {
  let acc = initialValue;

  for(let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue;
    }

    acc = fn(acc, this[i], i, this);
  }

  return acc;
}

const median = cart
  .map((product) => product.quantity * product.price)
  .reduce((acc, el) => {
    const quantity = acc.quantity + 1;
    const total =  acc.total + el;

    return {
      quantity,
      total,
      median: total / quantity,
    }
  }, { quantity: 0, total: 0, median: 0 })
  .median;

console.log(median);
