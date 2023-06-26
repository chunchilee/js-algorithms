function rs(n) {
  if (n === 1) {
    return 10;
  } else {
    return rs(n - 1) + 15;
  }
}

console.log(rs(3));
/**
 * 執行順序
 * rs(3) => rs(2)
 * rs(2) => rs(1)
 * rs(1) => 10
 * 返回
 * rs(2) => 10+15
 * rs(3) => 25+15
 */
