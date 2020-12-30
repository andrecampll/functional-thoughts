function generate(min, max, time) {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve) => {
    setTimeout(() => {
      const random = parseInt(Math.random() * (max - min + 1)) + min

      resolve(random);
    }, time);
  });
}

function generateNumbers() {
  return Promise.all([
    generate(1, 60, 1000),
    generate(1, 60, 3000),
    generate(1, 60, 2000),
    generate(1, 60, 1000),
    generate(1, 60, 2000),
    generate(1, 60, 3000),
  ]);
}

generateNumbers().then(numbers => console.log(numbers));
