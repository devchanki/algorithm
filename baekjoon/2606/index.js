// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const computer = parseInt(input[0]);
const nodeCount = parseInt(input[1]);
const graph = [...Array(computer + 1)].map((el) => []);

for (let i = 2; i < 2 + nodeCount; i++) {
  const [from, to] = input[i].split(" ").map((num) => parseInt(num));
  graph[from].push(to);
  graph[to].push(from);
}

const willVisit = [1];
const visited = Array(computer + 1).fill(0);
while (willVisit.length) {
  const current = willVisit.shift();
  if (visited[current]) continue;
  willVisit.push(...graph[current]);
  visited[current] = 1;
}

let answer = 0;
for (let i = 2; i < visited.length; i++) {
  if (visited[i]) answer++;
}

console.log(answer);
