function averagePair(arr, avg) {
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    let temp = (arr[left] + arr[right]) / 2;
    if (temp > avg) {
      right--;
    } else if (temp < avg) {
      left++;
    } else if (temp === avg) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }
  console.log(result);
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);