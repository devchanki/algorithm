// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : require("fs").readFileSync("./input.txt").toString().trim().split("\r\n");

const [N, R, C] = input[0].split(" ").map((el) => parseInt(el));

let answer = 0;

const visit = (n, r, c) => {
  if (n < 1) return;
  const splitedSize = 4 ** (n - 1);

  // 1 사분면
  if (0 <= r && r < 2 ** (n - 1) && 2 ** (n - 1) <= c && c < 2 ** n) {
    answer = answer + splitedSize;
    visit(n - 1, r, c - 2 ** (n - 1));
  }

  // 2 사분면
  if (2 ** (n - 1) <= r && r < 2 ** n && 2 ** (n - 1) <= c && c < 2 ** n) {
    answer = answer + 3 * splitedSize;
    visit(n - 1, r - 2 ** (n - 1), c - 2 ** (n - 1));
  }

  // 3 사분면
  if (2 ** (n - 1) <= r && r < 2 ** n && 0 <= c && c < 2 ** (n - 1)) {
    answer = answer + 2 * splitedSize;
    visit(n - 1, r - 2 ** (n - 1), c);
  }

  // 4 사분면
  if (0 <= r && r < 2 ** (n - 1) && 0 <= c && c < 2 ** (n - 1)) {
    visit(n - 1, r, c);
  }
};

visit(N, R, C);
console.log(answer);
