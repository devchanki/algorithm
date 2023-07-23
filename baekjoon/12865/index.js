const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");
const [N, K] = input[0].split(" ").map((el) => parseInt(el));
const thingsInfo = [];
const memorized = [...new Array(N + 1)].map((el) => new Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  thingsInfo.push(input[i].split(" ").map((el) => parseInt(el)));
}
for (let i = 1; i < N + 1; i++) {
  const [weight, value] = input[i].split(" ").map((el) => parseInt(el));

  for (let j = 1; j < K + 1; j++) {
    if (weight > j) memorized[i][j] = memorized[i - 1][j];

    if (weight <= j) {
      memorized[i][j] = Math.max(
        memorized[i - 1][j],
        memorized[i - 1][j - weight] + value
      );
    }
  }
}

console.log(memorized, memorized[N][K]);
