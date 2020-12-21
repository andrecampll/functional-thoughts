const fs = require('fs');
const path = require('path');

function generate(min, max) {
  if (min > max) [min, max] = [max, min];

  return new Promise((resolve) => {
    const random = parseInt(Math.random() * (max - min + 1)) + min

    resolve(random);
  });
}

generate(1, 60).then(console.log);

const filePath = path.join(__dirname, 'text.txt');

const readFile = (path) => {
  return new Promise((resolve) => {
    fs.readFile(path, (_, content) => {
      resolve(content.toString());
      console.log('After');
    });
  });
};

// fs.readFile(filePath, (_, content) => {
//   console.log(content.toString());
// });

readFile(filePath).then(
  (content) => {
    console.log(content);
  }
);
