
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : require("fs").readFileSync("./input.txt").toString().trim().split("\r\n");

N = parseInt(input[0]);
const answer = [];

const isSumIsZero = (currentNumberString) => {
  return eval(currentNumberString.replaceAll(" ", "")) === 0;
};

const makeNumberString = (operatorArr, lastNumber, arr) => {
  if (operatorArr.length === lastNumber - 1) {
    const strArr = [];
    for (let i = 1; i <= lastNumber; i++) {
      strArr.push(i);
      const operator = operatorArr.pop();
      if (operator) strArr.push(operator);
    }
    if (isSumIsZero(strArr.join(""))) arr.push(strArr.join(""));
    return;
  }
  makeNumberString([...operatorArr, "+"], lastNumber, arr);
  makeNumberString([...operatorArr, "-"], lastNumber, arr);
  makeNumberString([...operatorArr, " "], lastNumber, arr);
};

for (let i = 1; i <= N; i++) {
  const arr = [];
  makeNumberString([], parseInt(input[i]), arr);
  arr.sort();
  arr.forEach((el) => console.log(el));
  console.log();
}
