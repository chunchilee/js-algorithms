// 作法一
function maxSun(arr, size) {
  let max_value = -Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    // let window = [];
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt > max_value) {
      max_value = attempt;
    }
  }
  console.log(max_value);
}

function minSum(arr, size) {
  let min_value = 0;

  for (let i = 0; i <= arr.length - 2; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
      // console.log(arr[j]);
    }
    if (attempt < min_value) {
      min_value = attempt;
    }
    // console.log(attempt);
  }
  console.log(min_value);
}

//作法二
function maxSun(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }
  let tempValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }
  console.log(maxValue);
}
maxSun([2, 7, 3, 0, 6, 1, 5, 12, -11], 3);
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2);