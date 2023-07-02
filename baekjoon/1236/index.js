// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs")
        .readFileSync("./baekjoon/1668/input.txt")
        .toString()
        .split("\n");

const count = parseInt(input[0]);
const trophyHeight = [];

for (let i = 1; i <= count; i++) {
  trophyHeight.push(parseInt(input[i]));
}

let left = 0;
let right = 0;
let currentMax = -1;

for (let i = 0; i < count; i++) {
  if (trophyHeight[i] > currentMax) {
    currentMax = trophyHeight[i];
    left++;
  }
}

currentMax = -1;
for (let i = count - 1; i >= 0; i--) {
  if (trophyHeight[i] > currentMax) {
    right++;
    currentMax = trophyHeight[i];
  }
}

console.log(left);
console.log(right);
