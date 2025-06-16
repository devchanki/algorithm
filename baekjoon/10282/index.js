const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");
const [N] = input[0].split(" ").map((el) => parseInt(el));

const data = []

let index = 1
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
      if (parentIndex >= 0 && (this.data[parentIndex][1] > this.data[currentIndex][1])) {
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

      if (left < this.size() && (this.data[smallest][1] > this.data[left][1])) {
        smallest = left
      }

      if (right < this.size() && (this.data[smallest][1] > this.data[right][1])) {
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


const dijkstra = (graphInfo) => {

  const { n, d, c } = graphInfo;
  const distanceArray = Array.from({ length: n + 1 }).fill(Infinity)

  const minHeap = new MinHeap();
  // console.log(graphInfo)
  distanceArray[c] = 0

  minHeap.push([c, 0])

  let maxTime = 0; // 모든 컴퓨터가 감염되는 데 걸리는 최대 시간
  let infectedCount = 0; // 감염된 컴퓨터 수

  while (minHeap.size()) {
    const [computer, distance] = minHeap.pop();
    if (distance > distance[computer]) continue

    if (distanceArray[computer] !== Infinity) {
      maxTime = Math.max(maxTime, distanceArray[computer])
    }

    if (graphInfo[computer]) {
      graphInfo[computer].forEach(([_computer, _distance]) => {
        const newDistance = distanceArray[computer] + _distance;

        if (newDistance < distanceArray[_computer]) {
          distanceArray[_computer] = newDistance
          minHeap.push([_computer, newDistance])
        }
      });
    }
  }
  return [distanceArray.filter(el => el !== Infinity).length, maxTime]

}

let currentIndex = 1
for (let i = 0; i < N; i++) {
  const [n, d, c] = input[currentIndex++].split(" ").map(el => parseInt(el));
  const startIndex = currentIndex;
  const endIndex = currentIndex + d - 1;


  const graph = { n, d, c }
  for (let j = startIndex; j <= endIndex; j++) {
    const [a, b, s] = input[j].split(" ").map(el => parseInt(el));

    if (graph[b]) graph[b].push([a, s])
    else graph[b] = [[a, s]]

  }
  data.push(graph)
  currentIndex = endIndex + 1
}

data.forEach(el => console.log(dijkstra(el).join(" ")))


