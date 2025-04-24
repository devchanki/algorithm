const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : require("fs").readFileSync("./input.txt").toString().trim().split("\r\n");

const [N, M, V] = input[0].split(" ").map((el) => parseInt(el));
const graph = [...Array(N + 1)].map((el) => []);

// 정점과의 연결관계 정의
for (let i = 1; i <= M; i++) {
  const [N, M] = input[i].split(" ").map((el) => parseInt(el));
  graph[N].push(M);
  graph[N].sort((a, b) => a - b)
  graph[M].push(N);
  graph[M].sort((a, b) => a - b)

}

const dfs = (currentIndex, answer) => {
  const visited = []
  let needVisit = [currentIndex];

  while (needVisit.length > 0) {
    const data = needVisit.shift()
    if (visited[data]) continue;
    visited[data] = true;
    answer.push(data);
    needVisit = [...graph[data], ...needVisit]
  }

}
//


const bfs = (currentIndex, answer) => {
  const queue = [currentIndex];
  const visited = [];
  visited[currentIndex] = true;
  answer.push(currentIndex)

  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor)
        answer.push(neighbor)
      }
    }
  }
}

const dfsTracking = [];
const bfsTracking = [];
dfs(V, dfsTracking)
console.log(dfsTracking.join(" "))

bfs(V, bfsTracking)
console.log(bfsTracking.join(" "))