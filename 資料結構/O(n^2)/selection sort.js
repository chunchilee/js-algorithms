let unsorted = [14, -4, 17, 6, 22, 1, -5];

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minIndex = 0;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    console.log(arr);
  }
  return arr;
}

selectionSort(unsorted);

// 找最小值
// function smallest(arr) {
//   let smallest = arr[0];
//   for (let i = 1; i <= arr.length - 1; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   console.log(smallest);
//   return smallest;
// }
// smallest(unsorted);
