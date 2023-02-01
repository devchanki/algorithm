const input = require("fs")
  .readFileSync("./1260/input.txt")
  .toString()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M, V] = input[0].split(" ").map((el) => parseInt(el));
const graph = {}
for (let i = 1; i <= M; i++) {
  const [N, M] = input[i].split(" ").map((el) => parseInt(el));
  if (graph[N]) {
    graph[N].push(M)
  } else {
    graph[N] = [M]
  }

  if (graph[M]) {
    graph[M].push(N)
  } else {
    graph[M] = [N]
  }
}

console.log(graph)
