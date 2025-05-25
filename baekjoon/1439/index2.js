
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n")

const inputString = input[0].trim();

let countZero = 0
let countOne = 0
let currentNumber = inputString[0]

currentNumber === '1' ? countOne++ : countZero++

for (let i = 1; i < inputString.length; i++) {
  const num = inputString.charAt(i)
  if (num !== currentNumber) {
    currentNumber = num
    currentNumber === '1' ? countOne++ : countZero++
  }
}

console.log(Math.min(countOne, countZero))

