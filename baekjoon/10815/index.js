// 백준에서는 첫번째 조건으로 input 받게 설정
// 내 맥북, desktop 에선 두번째걸로 선택됨
const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const numberArray = input[1]
  .split(" ")
  .map((el) => parseInt(el))
  .sort((a, b) => a - b);

const testArray = input[3].split(" ").map((el) => parseInt(el));

// 정렬된 Array 반환
const binarySearch = (arr, number) => {
  let end = arr.length - 1;
  let start = 0;

  while (start <= end) {
    const mid = parseInt((end + start) / 2);

    if (start === end) {
      return arr[mid] === number;
    }

    if (arr[mid] > number) {
      end = mid;
    } else if (arr[mid] < number) {
      start = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};

let answer = "";
for (const num of testArray) {
  answer += binarySearch(numberArray, parseInt(num)) ? " 1" : " 0";
}

console.log(answer.trim());
