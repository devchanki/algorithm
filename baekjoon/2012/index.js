// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs")
        .readFileSync("./baekjoon/2012/input.txt")
        .toString()
        .split("\n");

const studentNumber = BigInt(input[0]);
const arr = [];
let answer = BigInt(0);
for (let i = 1; i <= studentNumber; i++) {
  arr.push(BigInt(input[i]));
}

const sorted = arr.sort();
sorted.forEach((el, index) => {
  console.log(el, index);
  answer += BigInt(Math.abs(el - (index + 1)));
});

console.log(answer);
