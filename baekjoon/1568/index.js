const MinHeap = require("../../datastructure/minHeap");

const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

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
