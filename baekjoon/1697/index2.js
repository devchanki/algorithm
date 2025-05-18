
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const MAX = 100001;

const [N, K] = input[0].split(" ").map((el) => parseInt(el));

const BFS = () => {
  const visited = new Array(MAX).fill(0);
  const willVisit = [N]
  while (willVisit.length > 0) {
    const data = willVisit.shift()
    if (K === data) return visited[data];
    for (const element of [data - 1, data + 1, data * 2]) {
      if (0 <= element && element <= MAX && !visited[element]) {
        willVisit.push(element);
        visited[element] = visited[data] + 1;
      }
    }
  }

}

console.log(BFS());