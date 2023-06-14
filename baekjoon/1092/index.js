// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs")
        .readFileSync("./baekjoon/1092/input.txt")
        .toString()
        .split("\n");

const craneNumber = parseInt(input[0]);
const craneList = input[1]
  .split(" ")
  .map((el) => parseInt(el))
  .sort((a, b) => b - a);

const boxNumber = parseInt(input[2]);
const boxList = input[3]
  .split(" ")
  .map((el) => parseInt(el))
  .sort((a, b) => b - a);

let answer = 0;
let count = 0;

if (boxList[0] > craneList[0]) return console.log(-1);

while(true) {
  if (count === boxNumber) break;

  for 
}
