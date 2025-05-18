const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

class MinHeap {
  constructor() {
    this.data = [];
  }

  peek() {
    // 없을 때 0 출력
    return this.data[0] || 0;
  }

  swap(index1, index2) {
    const data = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = data;
  }

  size() {
    return this.data.length
  }

  heapifyUp(index) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (parentIndex >= 0 && (this.data[parentIndex] > this.data[currentIndex])) {
        this.swap(parentIndex, currentIndex)
        currentIndex = parentIndex;
      }
      else break;
    }
  }

  heapifyDown(index) {
    let currentIndex = index;

    while (true) {
      const left = currentIndex * 2 + 1;
      const right = currentIndex * 2 + 2

      let smallest = currentIndex;

      if (left < this.size() && (this.data[smallest] > this.data[left])) {
        smallest = left
      }

      if (right < this.size() && (this.data[smallest] > this.data[right])) {
        smallest = right
      }

      if (smallest !== currentIndex) {
        this.swap(smallest, currentIndex);
        currentIndex = smallest
      } else {
        break;
      }
    }
  }


  push(data) {
    this.data.push(data);
    this.heapifyUp(this.data.length - 1);
  }

  pop() {
    if (this.data.length === 1) {
      return this.data.pop()
    }
    if (this.data.length > 1) {

      const lastIndex = this.size() - 1;
      this.swap(0, lastIndex);
      const data = this.data.pop();

      this.heapifyDown(0)

      return data
    }
    else return 0;

  }
}

const minHeap = new MinHeap()
const answer = []

for (let i = 1; i < input.length; i++) {
  const inputNumber = parseInt(input[i])

  if (inputNumber === 0) {
    answer.push(minHeap.pop());
  } else {
    minHeap.push(inputNumber)
  }
}

console.log(answer.join("\n"))