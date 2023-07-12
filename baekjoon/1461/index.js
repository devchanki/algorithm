const MinHeap = require("../../datastructure/minHeap");
// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const positiveHeap = new MinHeap();
const negativeHeap = new MinHeap();

const [bookCount, carryingCount] = input[0]
  .split(" ")
  .map((el) => parseInt(el));

const bookLocations = input[1]
  .split(" ")
  .map((location) => parseInt(location))
  .sort((a, b) => a - b);

const longestDistance = Math.max(
  Math.abs(bookLocations[0]),
  Math.abs(bookLocations[bookLocations.length - 1])
);

bookLocations.forEach((bookLocation) => {
  bookLocation > 0
    ? positiveHeap.insert(-bookLocation)
    : negativeHeap.insert(bookLocation);
});

let answer = 0;

while (positiveHeap.getSize()) {
  answer += positiveHeap.pop();
  for (let i = 0; i < carryingCount - 1; i++) {
    if (positiveHeap.getSize()) positiveHeap.pop();
  }
}

while (negativeHeap.getSize()) {
  answer += negativeHeap.pop();
  for (let i = 0; i < carryingCount - 1; i++) {
    if (negativeHeap.getSize()) negativeHeap.pop();
  }
}

console.log(-answer * 2 - longestDistance);
