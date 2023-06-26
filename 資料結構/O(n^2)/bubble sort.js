function bubble(arr) {
  console.log(arr.length);
  let step = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    let swap = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
        swap = true;
        console.log(arr);  
      }
    }
    if (swap == false) {
      break;
    }
  }
  console.log(step);
}

bubble([4, 7, 1, 2, 5, 3]);
