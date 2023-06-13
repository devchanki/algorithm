// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs")
        .readFileSync("./baekjoon/5585/input.txt")
        .toString()
        .split("\n");

const coinList = [500, 100, 50, 10, 5, 1];
const money = 1000 - parseInt(input[0]);
let remain = money;
let answer = 0;

for (coin of coinList) {
  while (remain - coin >= 0) {
    answer = answer + 1;
    remain = remain - coin;
  }
}

console.log(answer);
