// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const [row, column] = input[0].split(" ").map((el) => parseInt(el));
const matrix = [];

for (let r = 0; r < row; r++) {
  matrix.push(input[r + 1].trim().split(""));
}

const rowStatus = new Array(row).fill(false);
const columnStatus = new Array(column).fill(false);

for (let r = 0; r < row; r++) {
  for (let c = 0; c < column; c++) {
    if (matrix[r][c] === "X") {
      rowStatus[r] = true;
      columnStatus[c] = true;
    }
  }
}

console.log(rowStatus, columnStatus);

console.log(
  Math.max(
    rowStatus.filter((el) => !el).length,
    columnStatus.filter((el) => !el).length
  )
);
