const input = require("fs")
  .readFileSync("./11053/input.txt")
  .toString()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const count = parseInt(input[0]);
const inputList = input[1].split(" ").map((el) => parseInt(el));

const memorized = new Array(count).fill(1);

for (let i = 1; i < count; i++) {
  for (let j = 0; j < i; j++) {
    if (inputList[i] > inputList[j]) {
      memorized[i] = Math.max(memorized[i], memorized[j] + 1);
    }
  }
}

console.log(Math.max(...memorized));
