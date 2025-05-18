const MinHeap = require("../../datastructure/minHeap");

const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const bookNumber = parseInt(input[0]);
const bookSellInfoObject = {};

for (let i = 1; i <= bookNumber; i++) {
  const bookName = input[i].trim();
  if (bookSellInfoObject[bookName]) bookSellInfoObject[bookName] += 1;
  else bookSellInfoObject[bookName] = 1;
}

const keys = Object.keys(bookSellInfoObject);

let answer = keys[0];

keys.forEach((key) => {
  if (bookSellInfoObject[key] > bookSellInfoObject[answer]) {
    answer = key;
  }
  if (bookSellInfoObject[key] === bookSellInfoObject[answer] && key < answer) {
    answer = key;
  }
});

console.log(answer);
