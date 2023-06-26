//debug
function findBiggest(arr) {
  let tempMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    console.log("目前arr[" + i + "]的值是" + arr[i]);
    if (arr[i] > tempMax) {
      // console.log("arr[i]大於目前的tempMax" + tempMax + "，所以改變tempMax的值變成" + arr[i])
      tempMax = arr[i];
    }
    return tempMax;
  }
}

// console.log(findBiggest([15, 20, 22, 16, 7]),findBiggest([]));
console.log(findBiggest([]));
