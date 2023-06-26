function merge(a1, a2) {
  console.log("x " + a1, "y " + a2);
  let result = [];
  let i = 0;
  let j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] > a2[j]) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }
  //i or j 其中還有一些剩下的elements
  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }
  console.log("xy " + result);
  return result;
}
// merge([4, 5, 6], [1, 2, 3]);

function mergeSort(arr) {
  if (arr.length == 1) {
    console.log(arr);
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    console.log("q " + left, "w " + right);
    return merge(mergeSort(left), mergeSort(right));
  }
}

mergeSort([38, 42, 15, 1, 7, 5, 16, 9]);

/**
 * merge(mergeSort(left), mergeSort(right))
  => mergeSort([38,42,15,1]),mergeSort([7,5,16,9])
  執行 left
  => mergeSort([38,42,15,1])
  => mergeSort([38,42]),mergeSort([15,1])
  => mergeSort([38]),mergeSort([42]) 
  =>return ([38],[42])
  返回
  => merge([38],[42])
  => return ([38,42])
  執行
  => mergeSort([15,1])
  => mergeSort([15]),mergeSort([1]) 
  =>return ([15],[1])
  返回
  => merge([15],[1])
  => return ([1,15])
  返回
  => merge([38,42],[1,15])
  => return ([1,15,38,42])
  執行 right
  => mergeSort([7,5,16,9])
  => mergeSort([7,5]),mergeSort([16,9])
  => mergeSort([7]),mergeSort([5]) 
  =>return ([7],[5])
  返回
  => merge([7],[5])
  => return ([5,7])
  執行
  => mergeSort([16,9])
  => mergeSort([16]),mergeSort([9]) 
  =>return ([16],[9])
  返回
  => merge([16],[9])
  => return ([9,16])
  返回
  => merge([5,7],[9,16])
  => return ([5,7,9,16])
  返回
  =>merge([1,15,38,42],[5,7,9,16])
  => return ([1,5,7,9,15,16,38,42])
  */
