// function composition(fn1, fn2) {
//   return function(value) {
//     return fn2(fn1(value));
//   }
// }

function composition(...fns) {
  return function(value) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, value);
  }
}

function scream(text) {
  return text.toUpperCase();
}

function shout(text) {
  return `${text}!!!!`;
}

function slow(text) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(text.split('').join(' '));
    }, 3000);
  });
}

const extremely = composition(
  scream,
  shout,
  slow
);

const ALittleBitExtreme = composition(
  scream,
  shout,
);

extremely('hey').then(console.log);

ALittleBitExtreme('how are you?')
  .then(console.log);
