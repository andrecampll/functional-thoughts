function generate(min, max) {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve) => {
    const random = parseInt(Math.random() * (max - min + 1)) + min

    resolve(random);
  });
}

generate(1, 60).then(console.log);
