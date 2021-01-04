function waitFor(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

// waitFor(2000)
//   .then(() => console.log('Executing promise 1...'))
//   .then(waitFor)
//   .then(() => console.log('Executing promise 2...'))
//   .then(waitFor)
//   .then(() => console.log('Executing promise 3...'))
//   .then(waitFor)

function returnValue() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function main() {
  let value = await returnValue();

  await waitFor(1500);
  console.log('Async/Await 1...', value);
  
  await waitFor(1500);
  console.log('Async/Await 2...', value + 1);

  await waitFor(1500);
  console.log('Async/Await 3...', value + 2);

  return value;
}

main().then((value) => {
  console.log(value);
});
