const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");
const [N] = input[0].split(" ").map((el) => parseInt(el));

const datas = [];

let index = 0;

while (true) {
  if (input[index] === "0 0") break;

  const [N, M] = input[index++].split(" ").map((el) => parseInt(el));
  const [S, D] = input[index++].split(" ").map((el) => parseInt(el));
  const graph = { N, M, S, D, reverse: {} };

  for (let i = 0; i < M; i++) {
    const [U, V, P] = input[index++].split(" ").map((el) => parseInt(el));
    if (graph[U]) graph[U].push([V, P]);
    else graph[U] = [[V, P]];

    if (graph.reverse?.[V]) graph?.reverse?.[V].push([U, P]);
    else graph.reverse[V] = [[U, P]];
  }
  datas.push(graph);
}

class MinHeap {
  constructor() {
    this.data = [];
  }

  peek() {
    // 없을 때 0 출력
    return this.data[0] || null;
  }

  swap(index1, index2) {
    const data = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = data;
  }

  size() {
    return this.data.length;
  }

  heapifyUp(index) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        parentIndex >= 0 &&
        this.data[parentIndex][1] > this.data[currentIndex][1]
      ) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else break;
    }
  }

  heapifyDown(index) {
    let currentIndex = index;

    while (true) {
      const left = currentIndex * 2 + 1;
      const right = currentIndex * 2 + 2;

      let smallest = currentIndex;

      if (left < this.size() && this.data[smallest][1] > this.data[left][1]) {
        smallest = left;
      }

      if (right < this.size() && this.data[smallest][1] > this.data[right][1]) {
        smallest = right;
      }

      if (smallest !== currentIndex) {
        this.swap(smallest, currentIndex);
        currentIndex = smallest;
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
      return this.data.pop();
    }
    if (this.data.length > 1) {
      const lastIndex = this.size() - 1;
      this.swap(0, lastIndex);
      const data = this.data.pop();

      this.heapifyDown(0);

      return data;
    } else return null;
  }
}

const dijkstra = (graphInfo, excludeList) => {
  const { N, M, S, D } = graphInfo;

  const distanceArray = Array.from({ length: N + 1 }).fill(Infinity);

  const minHeap = new MinHeap();
  distanceArray[S] = 0;

  minHeap.push([S, 0]);

  while (minHeap.size()) {
    const [computer, distance] = minHeap.pop();
    if (distance > distanceArray[computer]) continue;


    if (graphInfo[computer]) {
      graphInfo[computer].forEach(([_computer, _distance]) => {
        const newDistance = distanceArray[computer] + _distance;
        if (excludeList && excludeList.has(`${computer}-${_computer}`)) return;
        if (newDistance < distanceArray[_computer]) {
          distanceArray[_computer] = newDistance;
          minHeap.push([_computer, newDistance]);
        }
      });
    }
  }
  return distanceArray;
};

const bfs = (graph, distanceArray) => {
  const { N, D, S, reverse } = graph
  const queue = [D];
  const visit = Array.from({ length: N + 1 }).fill(false);
  const edgesToRemove = new Set();
  while (queue.length) {
    const node = queue.shift();

    if (node === S) continue;
    const potentialPrevEdges = reverse[node] || [];
    for (const [prevNode, edgeWeightToCurrent] of potentialPrevEdges) {
      if (distanceArray[prevNode] + edgeWeightToCurrent === distanceArray[node]) {
        edgesToRemove.add(`${prevNode}-${node}`);
        if (!visit[prevNode]) {
          visit[prevNode] = true;
          queue.push(prevNode);
        }
      }
    }
  }
  return edgesToRemove;
};

for (const graph of datas) {
  const { D } = graph
  const firstDijkstra = dijkstra(graph)
  const excludeList = bfs(graph, firstDijkstra)
  const _ = dijkstra(graph, excludeList)
  const result = _[D]

  if (result === Infinity) console.log(-1)
  else console.log(result)
}
