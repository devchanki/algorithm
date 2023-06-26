class MinHeap {
  constructor() {
    this.heap = [];
  }

  print() {
    console.log(this.heap);
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

  swap(element1Index, element2Index) {
    [this.heap[element1Index], this.heap[element2Index]] = [
      this.heap[element2Index],
      this.heap[element1Index],
    ];
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  insert(element) {
    this.heap.push(element);
    let index = this.getSize() - 1;
    if (index === 0) return;

    while (index > 0) {
      let parentIndex = this.getParentNodeIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
      } else {
        break;
      }
      index = parentIndex;
    }
  }

  pop() {
    if (this.getSize() <= 2) return this.heap.pop();

    // 맨 처음것과 맨 마지막 요소 swap
    this.swap(0, this.getSize() - 1);
    const value = this.heap.pop();

    let index = 0;
    while (true) {
      if (
        this.heap[this.getLeftChildIndex(index)] >
        this.heap[this.getRightChildIndex(index)]
      ) {
        if (this.heap[index] > this.heap[this.getRightChildIndex(index)]) {
          this.swap(index, this.getRightChildIndex(index));
          index = this.getRightChildIndex(index);
        } else {
          break;
        }
      } else {
        if (this.heap[index] > this.heap[this.getLeftChildIndex(index)]) {
          this.swap(index, this.getLeftChildIndex(index));
          index = this.getLeftChildIndex(index);
        } else {
          break;
        }
      }
    }
    return value;
  }
}
