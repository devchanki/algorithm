
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

// 1 3 6 6 7 9

const sensor = parseInt(input[0]);
const center = parseInt(input[1]);

if (sensor < center) return console.log(0);

const sensorPosition = input[2]
  .split(" ")
  .map((el) => parseInt(el))
  .sort((a, b) => b - a);

let diff = [];

for (let i = 0; i < sensorPosition.length - 1; i++) {
  diff.push(sensorPosition[i] - sensorPosition[i + 1]);
}
diff = diff.sort((a, b) => b - a);

for (let i = 0; i < center - 1; i++) {
  diff[i] = 0;
}

const answer = diff.reduce((acc, curr) => acc + curr, 0);
console.log(answer);
