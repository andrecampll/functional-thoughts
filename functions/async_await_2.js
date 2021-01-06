function generate(min, max, forbiddenNumbers = []) {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve, reject) => {
    const random = parseInt(Math.random() * (max - min + 1)) + min;

    if (forbiddenNumbers.includes(random)) {
      reject('Already inside array');
    } else {
      resolve(random);
    }
  });
}

async function generateSix(quantity) {
  try {
    const numbers = [];

    for(let _ of Array(quantity).fill()) {
      numbers.push(await generate(1, 60, numbers));
    }

    return numbers;
  } catch(err) {
    throw "what a mess :(";
  }
}

generateSix(8)
  .then(console.log)
  .catch(console.log);

// generate(1, 5, [1, 2, 4])
//   .then(console.log)
//   .catch(console.log)
