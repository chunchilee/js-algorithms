// // arr 內的元素由小排到大
// function mySort(arr) {
//   let workingIndex = arr.length - 1;
//   while (workingIndex > 0) {
//     // index 0 => workingIndex max?
//     let biggest = arr[0];
//     let biggestIndex = 0;
//     // [0.5, 0, -3, 2, 1, 17]
//     for (let i = 0; i <= workingIndex; i++) {
//       // 把arr的index跑完找出最大值
//       if (arr[i] > biggest) {
//         biggest = arr[i]; // max 17->2->1
//         biggestIndex = i; // max[Index] 3
//       }
//     }
//     // console.log(biggest)
//     // console.log(workingIndex);
//     // console.log(arr);
//       // 將 biggest 與 arr[workingIndex]互換
//     let temp = arr[biggestIndex]; //儲存最大值
//     arr[biggestIndex] = arr[workingIndex]; // 將最小值放到index[0]
//     arr[workingIndex] = temp; //將儲存的最大值放到尾巴
//     workingIndex--; // 5 > 4 > 3 > 2 > 1 > 0
//     console.log(arr);
//   }
//   return arr;
// }
// mySort([17, 0, -3, 2, 1, 0.5]);

// ----------------------------------------------------------------
// function distance(h, n) {
//   let result = h;
//   for (let i = 2; i <= n; i++) {
//     console.log(result);
//     result += 2 * (h / Math.pow(2, i - 1));
//   }
//   return result;
// }
// console.log(distance(100, 4));
// console.log(distance(500, 7));
// ----------------------------------------------------------------

// function PPDI() {
//   for (let i = 100; i <= 999; i++) {
//     let unit = i % 10;
//     let tens = Math.floor((i / 10) % 10);
//     let hundreds = Math.floor((i / 100) % 10);

//     let sum = Math.pow(unit, 3) + Math.pow(tens, 3) + Math.pow(hundreds, 3);
//     if (sum == i) {
//       console.log(i);
//     }
//   }
// }

// PPDI(); // 153 370 371 407
// ----------------------------------------------------------------

// function calc(a, n) {
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       result += a * Math.pow(10, j);
//       console.log(result);
//     }
//   }
//   return result;
// }

// calc(2, 3);
// console.log(calc(10, 6));
// ----------------------------------------------------------------
// 將陣列內容物洗牌
// function shuffle(arr) {
//   let currentIndex = arr.length;
//   let randomIndex ;

//   while ( currentIndex != 0 && currentIndex > 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex-- ;
//     let temp = arr[currentIndex];
//     arr[currentIndex] = arr[randomIndex];
//     arr[randomIndex] = temp;
//   }
//   console.log(arr)
//   return arr;
// }

// shuffle([2, 11, 37, 43]);
// ----------------------------------------------------------------

function isSubsequence(str1, str2) {
  if (str1.length == 0) {
    // str2 全刪除後 仍是 "empty string" str1
    return true;
  }

  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] == str2[j]) {
      i++;
    }
    if (i >= str1.length) {
      return true;
    }
    j++; // str2[j] 始終找不到str1[i] => return false
  }
  return false;
}
// console.log(isSubsequence("", "Hello"));
console.log(isSubsequence("book", "brooklyn")); // true
console.log(isSubsequence("CAATCGA", "TCAATCAGGATCCGCTGA")); // true
console.log(isSubsequence("AATTAA", "TCAATCAGGATCCGCTGA"))
// ----------------------------------------------------------------
