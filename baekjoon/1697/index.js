
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const MAX = 100001;

const [N, K] = input[0].split(" ").map((el) => parseInt(el));
const bfs = () => {
  const visited = new Array(MAX).fill(0);
  const willVisit = [N];

  while (willVisit.length) {
    const current = willVisit.shift();
    if (current === K) return visited[current];

    for (const element of [current - 1, current + 1, current * 2]) {
      if (element >= 0 && element < MAX && !visited[element]) {
        visited[element] = visited[current] + 1;
        willVisit.push(element);
      }
    }
  }
};

console.log(bfs());
