
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

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
