
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

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
const isVisited = new Array(boxList.length).fill(false);
const cranePosition = new Array(craneList.length).fill(0);

if (boxList[0] > craneList[0]) return console.log(-1);

while (true) {
  if (count === boxNumber) break;

  for (let i = 0; i < craneList.length; i++) {
    while (cranePosition[i] < boxList.length) {
      if (
        !isVisited[cranePosition[i]] &&
        boxList[cranePosition[i]] <= craneList[i]
      ) {
        isVisited[cranePosition[i]] = true;
        cranePosition[i] += 1;
        count++;
        break;
      }
      cranePosition[i] += 1;
    }
  }
  answer++;
}
console.log(answer);
