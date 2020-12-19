const cart = [
  { name: 'Pencil', quantity: 10, price: 7.99 },
  { name: 'Printer', quantity: 2, price: 30.99 },
  { name: 'Book', quantity: 14, price: 4.99 },
  { name: 'Pen', quantity: 20, price: 9.99 },
  { name: 'Scissors', quantity: 6, price: 1.99 },
]

Array.prototype.myFilter = function(fn) {
  const newArray = [];

  for(let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
}

const filtering = cart
  .myFilter(product => product.price > 5)
  .map(product => product.name);

console.log('filtered:', filtering);