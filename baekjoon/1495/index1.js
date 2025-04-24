const input = require("fs")
  .readFileSync("./1495/input.txt")
  .toString()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, S, M] = input[0].split(" ").map((el) => parseInt(el));
const inputList = input[1].split(" ").map((el) => parseInt(el));

