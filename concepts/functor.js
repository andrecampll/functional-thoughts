// Functors are objects that implements the MAP function
// which is too a wrapper of a value

// Array is a example of functor

const numbers = [1, 2, 3, 4, 5, 6];

const newNumbers = numbers
  .map(element => element + 10)
  .map(element => element * 2);

console.log(newNumbers, numbers);

function SecureType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined;
    },
    map(fn) {
      if (this.invalid()) {
        return SecureType(null);
      } else {
        return SecureType(fn(this.value));
      }
    },
    flatMap(fn) {
      return this.map(fn).value;
    }
  }
}

const result = SecureType('This is a text')
  .map(text => text.toUpperCase())
  .map(text => `${text}`)
  .map(text => text.split('').join(' '));

console.log(result.value);
