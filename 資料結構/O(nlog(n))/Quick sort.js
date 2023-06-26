let arr = [2, 5, 7, 3, 1, 4];
quicksort(0, arr.length - 1);
console.log(arr);
function partition(p, r) {
  let x = arr[r];
  let i = p - 1;
  for (j = p; j <= r - 1; j++) {
    if (arr[j] <= x) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = temp;
  // console.log("3.i " + i);
  return i + 1;
}

function quicksort(p, r) {
  console.log("1.quicksor" + p, r);

  if (p < r) {
    // console.log("2." + arr);
    let q = partition(p, r); // return i+1 i=2 => q=3
    console.log("partition " + arr, "q " + q);
    quicksort(p, q - 1); // return i+1 i=-1 => q=0
    quicksort(q + 1, r); // r
  }  
}

/**
 * [2,5,7,3,1,4] 
 * => partition [2,3,1,4,7,5] ,i=2 
 * quick(p,q-1),quick(q+1,r)
 * quick(0,2),quick(4,5)
 * 1. quick(0,2) [2,3,1,4,7,5]
  partition [1,3,2,4,7,5] ,i=-1
  quick(p,q-1)
    => quick(0,-1) p>r false
  quick(q+1,r)
    => quick(1,2) [1,3,2,4,7,5]
    => partition [1,2,3,4,7,5] ,i=0
  quick(p,q-1)
    => quick(1,0) p>r false
  quick(q+1,r)
    => quick(2,2) p>r false
 * 2. quick(4,5) [1,2,3,4,7,5]
  partition [1,2,3,4,5,7] ,i=3
  quick(p,q-1)
    => quick(4,3) p>r false
  quick(q+1,r)
    => quick(5,5) p>r false
  */
