const MinHeap = require("../../datastructure/minHeap");

const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const baseString = input[0];
const stringPiece = input[1];

let answer = 0;
let position = 0;

while (position + stringPiece.length <= baseString.length) {
  for (let i = 0; i < stringPiece.length; i++) {
    if (baseString[position + i] !== stringPiece[i]) {
      position = position + 1;
      break;
    }

    if (i === stringPiece.length - 1) {
      answer++;
      position += stringPiece.length;
    }
  }
}

console.log(answer);
