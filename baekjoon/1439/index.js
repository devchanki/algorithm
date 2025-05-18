
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const inputString = input[0];

let countZero = 0;
let countOne = 0;

if (inputString[0] === "1") countZero++;
else countOne++;

for (let i = 0; i < inputString.length - 1; i++) {
  if (inputString[i] !== inputString[i + 1]) {
    inputString[i + 1] === "1" ? countZero++ : countOne++;
  }
}

console.log(Math.min(countOne, countZero));
