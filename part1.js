// function printEvery3() {
//   for (var i = 0; i <=88; i+=3) {
//     console.log(i);
// }
//   let i = 0;
//   while (i <= 88) {
//     console.log(i);
//     i += 3;
//   }
// }
// printEvery3();

// ----------------------------------------------------------------

// function table9to9() {
//   for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//       console.log(i + " x " + j + " = " + i * j);
//     }
//   }
// }
// table9to9();

// ----------------------------------------------------------------

// function isUpperCase(str) {
//   if (str.length == 0) {
//     return false;
//   }
//   return str[0] == str[0].toUpperCase()
// }
// console.log("ABCD"[0]); //A
// console.log(isUpperCase("ABCD")); // returns true
// console.log(isUpperCase("")); // returns false
// console.log(isUpperCase("aBCD")); // returns false

// ----------------------------------------------------------------

// function isAllUpperCase(str) {
// //   if (str.length == 0) {
// //     return false;
// // }
// // return str == str.toUpperCase();
// for (let i = 0; i < str.length; i++) {
//   if (str[i] != str[i].toUpperCase()) {
//     return false;
//   }
// }
//   return true;
// }

// console.log(isAllUpperCase("ABCD")); // returns true
// console.log(isAllUpperCase("")); // returns false
// console.log(isAllUpperCase("ABCDEFGhIJKLm")); // returns false

// ---------------------------------------------------------------

// function position(str) {
//   for (let i = 0; i <str.length; i++) {
//     if (str[i]== str[i].toUpperCase()) {
//       return str[i] + '' + i;
//     }
//   }
//   return -1;
// }

// console.log(position("abcd")); // prints -1
// console.log(position("AbcD")); // prints A 0
// console.log(position("abCD")); // prints C 2

// ---------------------------------------------------------------

// function findSmallCount(arr, n) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < n) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findSmallCount([1, 2, 3], 2)); // returns 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0
// console.log(findSmallCount([1, 2, 3, 4, 5], 6)); // returns 5

// ---------------------------------------------------------------

// function findSmallerTotal(arr, n) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < n) {
//       count += arr[i];
//     }
//   }
//   console.log(count);
//   return count;
// }

// findSmallerTotal([1, 2, 3], 3) // returns 3
// findSmallerTotal([1, 2, 3], 1) // returns 0
// findSmallerTotal([3, 2, 5, 8, 7], 999) // returns 25
// findSmallerTotal([3, 2, 5, 8, 7], 0) // returns 0

// ----------------------------------------------------------------

// function stars(n) {
// let star = '';
// for (let i = 1; i <= n; i++){
//   star += "*";
//   console.log(star);
// // }
// for (let i = 1; i <= n; i++) {
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star += "*";
//     console.log(star);
//   }
// }
// // }

// stars(1);
// // *
// console.log("======================================");
// stars(4);
// // *
// // **
// // ***
// // ****
// stars(10);

// -------------------------------------------------------------

//   function stars2(n) {
//     for(i= 1; i <=n; i++) {
//       let str = "";
//       for(j=1; j<=i; j++) {
//         str += "*";
//       }
//       console.log(str);
//     }
//     for(i= n-1; i >=1; i--) {
//       let str = "";
//       for(j=1; j<=i; j++) {
//         str += "*";
//       }
//       console.log(str);
//     }
//   }

// stars2(1);
// // *
// console.log("======================================");
// stars2(2);
// // *
// // **
// // *
// console.log("======================================");
// stars2(3);
// // *
// // **
// // ***
// // **
// // *
// console.log("======================================");
// stars2(4);
// // *
// // **
// // ***
// // ****
// // ***
// // **
// // *

// ----------------------------------------------------------------

function fib(n) {
  if (n == 0) {
    console.log(0);
    return 0;
  } else if (n == 1) {
    console.log(1);
    return 1;
  }
  let fib_sequence = [0, 1];
  while (fib_sequence.length <= n) {
    let n1 = fib_sequence[fib_sequence.length - 1];
    let n2 = fib_sequence[fib_sequence.length - 2];
    fib_sequence.push(n1 + n2);
  }
  console.log(fib_sequence);
}

// fib(0); // returns 0
// fib(1); // returns 1
// fib(2); // returns 1
// fib(3); // returns 2
fib(8); // returns 21

// ----------------------------------------------------------------
