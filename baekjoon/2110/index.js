// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs")
        .readFileSync("./baekjoon/2110/input.txt")
        .toString()
        .split("\n");

const [router, home] = input[0].split(" ").map((el) => parseInt(el));

const routerPosition = [];

for (let i = 0; i < router; i++) {
  const router = parseInt(input[i + 1]);
  routerPosition.push(router);
}

const sortedRouterPosition = routerPosition.sort((a, b) => a - b);

let end =
  sortedRouterPosition[sortedRouterPosition.length - 1] -
  sortedRouterPosition[0];
let start = 1;
let answer = 0;

while (start <= end) {
  const mid = parseInt((end + start) / 2);
  let currentPosition = sortedRouterPosition[0];
  let count = 1;

  for (let i = 1; i < sortedRouterPosition.length; i++) {
    if (currentPosition + mid <= sortedRouterPosition[i]) {
      count += 1;
      currentPosition = sortedRouterPosition[i];
    }
  }

  if (home <= count) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
