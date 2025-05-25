
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const studentNumber = BigInt(input[0]);
const arr = [];

for (let i = 1; i <= studentNumber; i++) {
  arr.push(parseInt(input[i]))
}

const sorted = arr.sort((a, b) => a - b)
let answer = 0
for (let i = 0; i < sorted.length; i++) {
  answer = answer + Math.abs(sorted[i] - (i + 1))
}
console.log(answer);
