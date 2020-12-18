const nums = [1,2,3,4,5,6]

console.log(nums.map((n, i, a) => (n * 2 + i + a.length)))

const cart = [
  { name: 'Pencil', quantity: 10, price: 7.99 },
  { name: 'Printer', quantity: 2, price: 30.99 },
  { name: 'Book', quantity: 14, price: 4.99 },
  { name: 'Pen', quantity: 20, price: 9.99 },
  { name: 'Scissors', quantity: 6, price: 1.99 },
]

const quantities = cart.map((product) => (product.quantity * product.price));
console.log(quantities);

const names = cart.map((product) => (product.name));
console.log(names);
