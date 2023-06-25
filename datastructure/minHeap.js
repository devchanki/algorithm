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

  swap(element1, element2) {
    [this.heap[element1], this.heap[element2]] = [
      this.heap[element2],
      this.heap[element1],
    ];
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  insert(element) {
    this.heap.push(element);
    let index = this.getSize() - 1;
    if (index === 0) return;

    let parentIndex = this.getParentNodeIndex(index);

    while (parentIndex > 0) {
      console.log(index, parentIndex);
      if (this.heap[parentIndex] > this.heap[index]) {
        console.log(this.heap);

        this.swap(parentIndex, index);
        console.log(this.heap);
      } else {
        break;
      }
      parentIndex = index;
      index = parentIndex;
    }
  }

  pop() {}

  heapifyUp() {}
}

const heap = new MinHeap();

heap.insert(12);
heap.print();

heap.insert(3);
heap.print();

heap.insert(122);

heap.print();

heap.insert(11);
heap.print();

heap.insert(1);
heap.print();

heap.print();
