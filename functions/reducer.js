const array = [1,2,3,4,5];

const reduced = array.reduce((acc, el) => acc + el);

console.log(reduced);

const cart = [
  { name: 'Pencil', quantity: 10, price: 7.99 },
  { name: 'Printer', quantity: 2, price: 30.99 },
  { name: 'Book', quantity: 14, price: 4.99 },
  { name: 'Pen', quantity: 20, price: 9.99 },
  { name: 'Scissors', quantity: 6, price: 1.99 },
];

const totalGeral = cart
  .map((product) => product.quantity * product.price)
  .reduce((acc, el) => acc + el, 1000);

console.log(totalGeral);
