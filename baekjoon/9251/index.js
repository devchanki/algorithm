
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : require("fs").readFileSync("./input.txt").toString().trim().split("\r\n");

const [str1, str2] = input;

const answer = Array.from({ length: str1.length + 1 }, () => Array.from({ length: str2.length + 1 }, () => 0))

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) answer[i][j] += answer[i - 1][j - 1] + 1
    else {
      answer[i][j] = Math.max(answer[i][j - 1], answer[i - 1][j])
    }
  }
}

console.log(answer[str1.length][str2.length])