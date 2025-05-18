
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : require("fs").readFileSync("./input.txt").toString().trim().split("\r\n");

n = parseInt(input[0]);

const getRepeatedLastNumberArr = (a, b) => {
  const arr = [a % 10];
  for (let i = 0; i < b; i++) {
    const lastNumber = (arr[arr.length - 1] * a) % 10;
    if (arr[0] === lastNumber) {
      return arr;
    } else arr.push(lastNumber);
  }
  return arr;
};

const getLastDataProcessingComputer = (a, b) => {
  const lastNumberArray = getRepeatedLastNumberArr(a, b);
  const index = b % lastNumberArray.length || lastNumberArray.length;
  return lastNumberArray[index - 1] || 10;
};

const result = [];
for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map((str) => parseInt(str));
  result.push(getLastDataProcessingComputer(a, b));
}

console.log(result.join("\n"));
