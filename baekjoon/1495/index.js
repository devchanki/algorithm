const input = require("fs")
  .readFileSync("./1495/input.txt")
  .toString()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, S, M] = input[0].split(" ").map((el) => parseInt(el));
const inputList = input[1].split(" ").map((el) => parseInt(el));

const memorized = [...new Array(N + 1)].map(el => new Array(M + 1).fill(0));

memorized[0][S] = 1;

for (let i = 1; i < N + 1; i++) {
  for (let j = 0; j < M + 1; j++) {
    if (memorized[i - 1][j] === 0) continue;
    if (j - inputList[i - 1] >= 0) memorized[i][j - inputList[i - 1]] = 1
    if (j + inputList[i - 1] <= M) memorized[i][j + inputList[i - 1]] = 1
  }
}

let answer = -1

memorized[N].forEach((el, idx) => {
  if (el === 1) answer = idx;
})

console.log(answer)