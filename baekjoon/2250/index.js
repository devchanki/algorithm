const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs").readFileSync("./input.txt").toString().split("\n");

const count = parseInt(input[0]);
const graph = {};

class Node {
  constructor(data, left, right) {
    this.parent = -1;
    this.data = data;
    this.left = left;
    this.right = right;
  }

  getLeftChildNode() {
    return this.left;
  }

  getRightChildNode() {
    return this.right;
  }

  setParent(parent) {
    this.parent = parent;
  }
  getParent() {
    return this.parent;
  }

  getData() {
    return this.data;
  }
}
const levelMax = [];
const levelMin = [];
let root = -1;

const inOrderTraversal = (graph, node, level, acc = []) => {
  const currentNode = graph[node];
  if (!!currentNode) {
    if (currentNode.getLeftChildNode() !== -1) {
      inOrderTraversal(graph, currentNode.getLeftChildNode(), level + 1, acc);
    }
    acc[level] = acc.push({ node, level });
    if (currentNode.getRightChildNode() !== -1) {
      inOrderTraversal(graph, currentNode.getRightChildNode(), level + 1, acc);
    }
  }
  return acc;
};

for (let i = 1; i <= count; i++) {
  const [value, left, right] = input[i].split(" ").map((el) => parseFloat(el));
  const node = new Node(value, left, right);
  console.log(value, left, right);
  if (left !== -1 || right !== -1) node.setParent(value);
  graph[value] = node;
}

Object.keys(graph).forEach((key) => {
  if (graph[key].getParent() === -1) root = key;
});

console.log(graph);
console.log(inOrderTraversal(graph, root, 1));
