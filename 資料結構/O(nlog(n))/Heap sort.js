// buildMaxHeap()沒放入參數：heapSize 和 arr 都是global variables，因為它們不只被一個function使用

// maxHeapify(0)會recursion，將最大值放置i=0，與其對調的index在不斷往下比大小(maxHeapify(largest))，直到arr內是由大排到小

let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666];
heapSort();
console.log(arr);

function heapSort() {
  buildMaxHeap();
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize--;
    maxHeapify(0);
  }
  return arr;
}

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
}

function maxHeapify(i) {
  let largest;
  let left = i * 2 + 1;
  let right = i * 2 + 2;

  if (left <= heapSize && arr[left] > arr[i]) {
    largest = left;
  } else {
    largest = i;
  }
  if (right <= heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
}
