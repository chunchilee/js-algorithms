function addUpTo(n) {
  // O(n) 需執行每個i項，花費時間較長
  // let result = 0
  // for ( let i = 0; i <= n; i++ ) {
  //   result += i;
  // }
  // return result;
  // ----------------------------------------------------------------
  // O(1) 花費時間較少
  // return ((1 + n ) * n / 2); 首相 ＋ 末相
}

let start = performance.now();
console.log(addUpTo(10000));
let end = performance.now();
console.log(end - start);

var result = 0;
for (let i = 0; i < 10; i++) {
  result += 10;
  console.log(result);
  if (i == 5) {
    break;
  }
}
console.log(result);
