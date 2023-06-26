// function reverse(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     result += str[str.length - 1 - i];
//   }
//   console.log(result);
//   return result;
// }

// reverse("士護小屎牛aka 雲風得清")
// ----------------------------------------------------------------

// function swap(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase()) {
//       result += str[i].toLowerCase();
//     } else {
//       result += str[i].toUpperCase();
//     }
//   }
//   console.log(result);
//   return result;
// }

// swap("Aloha");
// swap("Love you");
// ----------------------------------------------------------------

// function isPrime(n) {
//   if(n == 1) {
//     console.log(false);
//     return false;
//   }
//   let start = 2;
//   while(start < n) {
//     if (n % start == 0){
//       console.log(false)
//       return false;
//     } ;
//     start++;
//   };
//   console.log(true)
//   return true;
// };

// isPrime(1);
// isPrime(2);
// isPrime(5);
// isPrime(91);
// isPrime(1000000);
// ----------------------------------------------------------------

// function palindrome(str) {
//   let i =0;
//   let j = str.length -1;

//   while ( i < j ) {
//     if ( str[i] != str[j] ) {
//       console.log(false);
//       return false;
//     }
//     i++;
//     j--;
//   }
//   console.log(true)
//   return true;
// }
// // solution 2
// function reverse(str) {
//   let result = "";
//   for( let i = 0; i < str.length; i++ ) {
//     result += str[str.length - 1 - i];
//   }
//   return result;
// }
// function palindrome(str) {
//   console.log(str == reverse(str));
//   return str == reverse(str);
// }
// palindrome("bearaeb");
// palindrome("whatever revetahw");
// palindrome("Aloha, how are you today?");
//----------------------------------------------------------------

// function printStarts(space, start) {
//   let result = "";
//   for (let i = 0; i < space; i++) {
//     result += " ";
//   }
//   for (let i = 0; i < start; i++) {
//     result += "*";
//   }
//   console.log(result);
// }
// function pyramid(k) {
//   let start = 1;
//   let space = k - 1;
//   while (space >= 0) {
//     printStarts(space, start);
//     // 3,1
//     // 2,3
//     // 1,5
//     // 0,7
//     start += 2;
//     space -= 1;
//   }
// }
//   function inversePyramid(n) {
//     let star = 2 * n - 1;
//     let space = 0;
//     while (star > 0) {
//       printStarts(space, star);
//       star -= 2;
//       space += 1;
//     }
//     // star 7 5 3 1
//   }

// pyramid(1);
// // *
// pyramid(2);
// // *
// // ***
// console.log("================================================");
// pyramid(4);
// // *
// //  ***
// // *****
// ----------------------------------------------------------------

// function factorPrime(n) {
//   let answer = n + " = ";
//   let p = 2;
//   while (p <= n) {
//     if (n % p == 0) {
//       n /= p;
//       answer += p + " x ";
//     } else {
//       p++;
//     }
//   }
//   console.log(answer);
//   let answer2 = "";
//   for (let i = 0; i < answer.length - 3; i++) {
//     answer2 += answer[i];
//   }
//   console.log(answer2);
//   return answer2;
// }

// factorPrime(120);
