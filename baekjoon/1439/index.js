// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs")
        .readFileSync("./baekjoon/1439/input.txt")
        .toString()
        .split("\n");

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
