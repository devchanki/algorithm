class MinHeap {
  constructor() {
    this.heap = [];
  }

  getSize() {
    return this.heap.length;
  }

  getParentNodeIndex(index) {
    return Math.floor(index / 2);
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  insert(element) {
    this.heap.push(element);
  }

  pop() {}

  heapifyUp() {}
}
