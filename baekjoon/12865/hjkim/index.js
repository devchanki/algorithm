// 평범한 배낭
// https://www.acmicpc.net/problem/12865

const input = require("fs")
  .readFileSync("baekjoon/12865/hjkim/input.txt")
  .toString()
  .split("\n");

const [N, K] = input[0].split(" ").map((el) => Number(el));
const inputList = [];
for (let i = 1; i < input.length; i++) {
  const list = input[i].replace("\r", "").split(" ");
  if (list[0] > K) continue;
  inputList.push({ w: Number(list[0]), v: Number(list[1]) });
}

inputList.sort(function (a, b) {
  return b.v - a.v;
});

const result = [];

console.log("N, K: ", N, K);
console.log("inputList: ", inputList);

for (let i = 0; i < inputList.length; i++) {
  let weight = inputList[i].w;
  let value = inputList[i].v;

  for (let j = 0; j < inputList.length; j++) {
    if (i === j) continue;
    if (weight + inputList[j].w <= K) {
      weight += inputList[j].w;
      value += inputList[j].v;
    }

    if (weight === K || j === inputList.length - 1) {
      result.push(value);
      break;
    }
  }
}

console.log("result: ", result);
console.log(Math.max(...result));
