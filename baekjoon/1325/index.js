// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map((el) => parseInt(el));
const graph = [...new Array(N + 1)].map((el) => []);

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(" ").map((el) => parseInt(el));
  graph[A].push(B);
}

console.log(graph);
