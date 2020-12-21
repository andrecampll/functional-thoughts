let a = 1;

let p = new Promise((resolve) => {
  resolve(['React', 'React Native', 'NodeJS', 'Elixir']);
});

p.then((value) => {
  console.log(value);
  return value[1];
}).then(console.log);
