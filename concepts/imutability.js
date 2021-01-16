// This function does not change the original array
// This allow us to work in various enviroments of processor's thread

const numbers = [3,1,7,3,8,3,5,2,1,4];

function order(array) {
  return [...array].sort()
}

const sorted = order(numbers);

console.log(numbers);
console.log(sorted);