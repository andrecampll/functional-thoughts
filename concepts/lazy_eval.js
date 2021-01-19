function eager(a, b) {
  const value = Math.pow(a, 3);
  
  const end = Date.now() + 2500;

  while(Date.now() < end) {}

  return value + b;
}

function lazy(a) {
  const value = Math.pow(a, 3);
  
  const end = Date.now() + 2500;

  while(Date.now() < end) {}

  return function(b) {
    return value + b;
  }
}

console.time('#1');
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd('#1');

console.time('#2');

const lazyValue = lazy(3);

console.log(lazyValue(100));
console.log(lazyValue(200));
console.log(lazyValue(300));
console.timeEnd('#2');
