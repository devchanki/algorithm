const MinHeap = require("../../datastructure/minHeap");

const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const questionCount = parseInt(input[0]);
const questionInfo = [];

for (let i = 1; i <= questionCount; i++) {
  const [deadline, cupNoodle] = input[i].split(" ").map((el) => parseInt(el));
  questionInfo.push({ deadline, cupNoodle });
}

const sortedQuestionInfo = questionInfo.sort((a, b) => {
  return a.deadline - b.deadline;
});

const minHeap = new MinHeap();

let answer = 0;
for (let i = 0; i < sortedQuestionInfo.length; i++) {
  const { cupNoodle, deadline } = sortedQuestionInfo[i];
  if (minHeap.getSize() < deadline) {
    minHeap.insert(cupNoodle);
    continue;
  }
  if (minHeap.peek() < cupNoodle) {
    minHeap.pop();
    minHeap.insert(cupNoodle);
  }
}

const size = minHeap.getSize();
for (let i = 0; i < size; i++) {
  answer += minHeap.pop();
}

console.log(answer);
