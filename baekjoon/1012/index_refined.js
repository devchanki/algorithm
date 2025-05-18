const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : require("fs")
        .readFileSync("./input.txt")
        .toString()
        .trim()
        .split(process.platform === "darwin" ? "\n" : "\r\n");

const caseCount = Number(input[0]);

const getTestCaseInfo = () => {
  let currentIndex = 1;
  const cases = [];
  for (let i = 0; i < caseCount; i++) {
    const [horizontal, vertical, count] = input[currentIndex]
      .split(" ")
      .map(Number);
    const positions = input
      .slice(currentIndex + 1, currentIndex + 1 + count)
      .map((line) => line.split(" ").map(Number));
    currentIndex += count + 1;
    cases.push({ horizontal, vertical, positions });
  }
  return cases;
};

const createGrid = (rows, cols, initialValue) =>
  Array.from({ length: rows }, () => Array(cols).fill(initialValue));

const isValid = (x, y, xMax, yMax, visited, map) =>
  x >= 0 && y >= 0 && x < xMax && y < yMax && !visited[x][y] && map[x][y];

const dfs = (x, y, xMax, yMax, visited, map) => {
  if (!isValid(x, y, xMax, yMax, visited, map)) return 0;

  visited[x][y] = true;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (const [dx, dy] of directions) {
    dfs(x + dx, y + dy, xMax, yMax, visited, map);
  }
  return 1;
};

const answer = (cases) => {
  cases.forEach(({ horizontal, vertical, positions }) => {
    const map = createGrid(horizontal, vertical, 0);
    const visited = createGrid(horizontal, vertical, false);
    let count = 0;

    positions.forEach(([x, y]) => {
      map[x][y] = 1;
    });

    for (let x = 0; x < horizontal; x++) {
      for (let y = 0; y < vertical; y++) {
        count += dfs(x, y, horizontal, vertical, visited, map);
      }
    }

    console.log(count);
  });
};

const data = getTestCaseInfo();
answer(data);
