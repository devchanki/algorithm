const MinHeap = require("../../datastructure/minHeap");
// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs")
        .readFileSync("./baekjoon/1568/input.txt")
        .toString()
        .split("\n");

const birdsCount = parseInt(input[0]);
let count = birdsCount;
let currentCount = 1;
let answer = 0;
while (count > 0) {
  count -= currentCount;
  currentCount++;
  answer++;
  if (count < currentCount) currentCount = 1;
}

console.log(answer);
