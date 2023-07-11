const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : require("fs")
        .readFileSync("./baekjoon/1991/input.txt")
        .toString()
        .split("\n");

const count = parseInt(input[0]);
const graph = {};

class Node {
  constructor(data, left, right) {
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

  getData() {
    return this.data;
  }
}

for (let i = 1; i <= count; i++) {
  const [parent, left, right] = input[i]
    .split(" ")
    .map((el) => (el.trim() === "." ? null : el.trim()));
  graph[parent] = new Node(parent, left, right);
}

const inOrder = (graph, startNode, acc = []) => {
  if (startNode) {
    const node = graph[startNode];

    if (node.getLeftChildNode()) inOrder(graph, node.getLeftChildNode(), acc);
    acc.push(node.getData());
    if (node.getRightChildNode()) inOrder(graph, node.getRightChildNode(), acc);
  }
  return acc.join("");
};
const preOrder = (graph, startNode, acc = []) => {
  if (startNode) {
    const node = graph[startNode];

    acc.push(node.getData());
    if (node.getLeftChildNode()) preOrder(graph, node.getLeftChildNode(), acc);
    if (node.getRightChildNode())
      preOrder(graph, node.getRightChildNode(), acc);
  }
  return acc.join("");
};

const postOrder = (graph, startNode, acc = []) => {
  if (startNode) {
    const node = graph[startNode];
    if (node.getLeftChildNode()) postOrder(graph, node.getLeftChildNode(), acc);
    if (node.getRightChildNode())
      postOrder(graph, node.getRightChildNode(), acc);
    acc.push(node.getData());
  }
  return acc.join("");
};

console.log(preOrder(graph, "A"));
console.log(inOrder(graph, "A"));
console.log(postOrder(graph, "A"));
