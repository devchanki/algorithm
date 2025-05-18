// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : require("fs")
        .readFileSync("./input.txt")
        .toString()
        .trim()
        .split(process.platform === "darwin" ? "\n" : "\r\n");

const caseCount = parseInt(input[0]);
const getTestCaseInfo = () => {
  let currentIndex = 1;
  const answer = [];
  for (let i = 0; i < caseCount; i++) {
    const [horizontal, vertical, count] = input[currentIndex]
      .split(" ")
      .map((el) => parseInt(el));
    const data = input.slice(currentIndex, count + currentIndex + 1);
    currentIndex = count + currentIndex + 1;
    answer.push(data);
  }
  return answer;
};

const data = getTestCaseInfo();

const dfs = (x, y, xMax, yMax, visited, map) => {
  if (x >= 0 && y >= 0 && x < xMax && y < yMax && !visited[x][y] && map[x][y]) {
    visited[x][y] = true;
    dfs(x - 1, y, xMax, yMax, visited, map);
    dfs(x, y - 1, xMax, yMax, visited, map);
    dfs(x + 1, y, xMax, yMax, visited, map);
    dfs(x, y + 1, xMax, yMax, visited, map);
    return 1;
  }

  return 0;
};

const answer = (cases) => {
  const answers = [];
  for (let data of cases) {
    const [horizontal, vertical, count] = data[0]
      .split(" ")
      .map((el) => parseInt(el));
    const _ = Array.from(new Array(horizontal), () =>
      new Array(vertical).fill(0)
    );
    const visited = Array.from(new Array(horizontal), () =>
      new Array(vertical).fill(0)
    );
    let answer = 0;
    for (let i = 1; i <= count; i++) {
      const [a, b] = data[i].split(" ");
      _[a][b] = 1;
    }

    for (let i = 0; i < horizontal; i++) {
      for (let j = 0; j < vertical; j++) {
        answer += dfs(i, j, horizontal, vertical, visited, _);
      }
    }
    answers.push(answer);
  }
  answers.forEach((el) => console.log(el));
};
answer(data);
