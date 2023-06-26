let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666];
heapSort();
// console.log(arr);

function buildMaxHeap() {
  heapSize = arr.length - 1; // 7 = 8 - 1
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    console.log(arr);
    maxHeapify(i);
  }
}

function maxHeapify(i) {
  let largest;
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest != i) {
    // swap A[i] with A[largest]
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
}

function heapSort() {
  buildMaxHeap();
  // console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(heapSize);
    // exchange A[0] with A[i]

    // console.log(arr);
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp; // arr 7=>6=>5
    heapSize -= 1; // hs  7=>6=>5
    maxHeapify(0);
    // console.log(arr);
  }

  return arr;
}


