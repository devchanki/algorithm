
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : require("fs").readFileSync("./input.txt").toString().trim().split("\r\n");

const [N] = input[0].split(" ").map((el) => parseInt(el));

const dp = [0, 1, 2];

const tile = (n) =>
  dp[n] ? dp[n] : (dp[n] = (tile(n - 2) + tile(n - 1)) % 15746);

console.log(tile(N));
