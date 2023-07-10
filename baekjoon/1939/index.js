// N(2 ≤ N ≤ 10,000)개의 섬으로 이루어진 나라가 있다. 이들 중 몇 개의 섬 사이에는 다리가 설치되어 있어서 차들이 다닐 수 있다.
// 영식 중공업에서는 두 개의 섬에 공장을 세워 두고 물품을 생산하는 일을 하고 있다. 물품을 생산하다 보면 공장에서 다른 공장으로 생산 중이던 물품을 수송해야 할 일이 생기곤 한다. 그런데 각각의 다리마다 중량제한이 있기 때문에 무턱대고 물품을 옮길 순 없다. 만약 중량제한을 초과하는 양의 물품이 다리를 지나게 되면 다리가 무너지게 된다.
// 한 번의 이동에서 옮길 수 있는 물품들의 중량의 최댓값을 구하는 프로그램을 작성하시오.
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs")
        .readFileSync("./baekjoon/1939/input.txt")
        .toString()
        .split("\n");
const [island, bridge] = input[0].split(" ").map((el) => parseInt(el));
const graph = {};
const bfs = (start, end, weight) => {
  const visited = new Array(island + 1).fill(false);
  const queue = [start];
  while (queue.length > 0) {
    const current = queue.shift();
    for (let node of graph[current]) {
      const [destination, limit] = node;
      if (weight <= limit && !visited[destination]) {
        visited[destination] = true;
        queue.push(destination);
      }
    }
  }
  return visited[end];
};
for (let i = 1; i <= bridge; i++) {
  const [A, B, C] = input[i].split(" ").map((el) => parseInt(el));
  if (graph[A]) graph[A].push([B, C]);
  else graph[A] = [[B, C]];
  if (graph[B]) graph[B].push([A, C]);
  else graph[B] = [[A, C]];
}
const [origin, destination] = input[bridge + 1].split(" ");
let start = 0;
let end = 10000000000;
let answer = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);
  if (bfs(origin, destination, mid)) {
    answer = Math.max(answer, mid);
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(answer);
