function main(value, chanceError) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceError) {
      reject('Error');
    } else {
      resolve(value);
    }
  });
}

main('Teste', 0.5).then(
  console.log, err => console.log(`Error: ${err}` )
  )
  .catch(console.log)