const input = require("fs")
  .readFileSync("./baekjoon/1260/input.txt")
  .toString()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M, V] = input[0].split(" ").map((el) => parseInt(el));
const graph = [...Array(N + 1)].map(el => [])

// 정점과의 연결관계 정의
for (let i = 1; i <= M; i++) {
  const [N, M] = input[i].split(" ").map((el) => parseInt(el));
  graph[N].push(M)
  graph[M].push(N)
}

const DFS = () => {
  const visited = new Array(N + 1).fill(false);
  const needVisit = [V]
  const result = []
  while (needVisit.length > 0) {
    const willVisit = needVisit.pop();
    if (visited[willVisit]) continue;
    visited[willVisit] = true
    result.push(willVisit);
    needVisit.push(...graph[willVisit])
  }
  return result;
}
Object.keys(graph).forEach(key => {
  graph[key].sort((a, b) => b - a)
});
console.log(DFS().join(" "))

const BFS = () => {
  const visited = new Array(N + 1).fill(false);
  const needVisit = [V]
  const result = []
  while (needVisit.length > 0) {
    const willVisit = needVisit.shift();
    if (visited[willVisit]) continue;
    visited[willVisit] = true
    result.push(willVisit);
    needVisit.push(...graph[willVisit])
  }
  return result;
}
Object.keys(graph).forEach(key => {
  graph[key].sort((a, b) => a - b)
});

console.log(BFS().join(" "))

