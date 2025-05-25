const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  graph[B].push(A);
}

const dfs = (currentIndex) => {
  let answer = 0;

  const willVisit = [currentIndex];
  const visited = Array(N + 1).fill(false);
  visited[currentIndex] = true;

  while (willVisit.length > 0) {
    const current = willVisit.pop();
    if (!graph[current]) continue;

    for (let i = 0; i < graph[current].length; i++) {
      const value = graph[current][i];
      if (visited[value]) continue;
      visited[value] = true;
      answer = answer + 1;
      willVisit.push(value);
    }
  }
  return answer;
};

let maxCount = -1;
let answer = [];

for (let i = 1; i <= N; i++) {
  const count = dfs(i);
  if (count > maxCount) {
    maxCount = count;
    answer = [i];
  } else if (count === maxCount) {
    answer.push(i);
  }
}

console.log(answer.join(" "));
