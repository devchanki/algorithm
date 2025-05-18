// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const arrayString = input[1].split(" ").map((el) => parseInt(el));

const array = input[3].split(" ").map((el) => parseInt(el));
const obj = {};

for (const number of arrayString) {
  obj[number] = true;
}

for (const test of array) {
  console.log(obj[test] ? 1 : 0);
}
