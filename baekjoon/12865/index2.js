const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");
const [N, K] = input[0].split(" ").map((el) => parseInt(el));
const memorized = [...new Array(N + 1)].map((el) => new Array(K + 1).fill(0));


for (let i = 1; i <= N; i++) {
  const [W, V] = input[i].split(" ").map(el => parseInt(el));

  for (let j = 1; j <= K; j++) {
    if (j < W) memorized[i][j] = memorized[i - 1][j]
    else memorized[i][j] = Math.max(memorized[i - 1][j - W] + V, memorized[i - 1][j])
  }
}


console.log(memorized[N][K]);
