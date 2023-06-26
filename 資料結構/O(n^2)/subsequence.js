function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (pointer1 >= str1.length) {
      console.log(true);
      return true;
    }
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
      pointer
    }
    pointer2++;
  }
  console.log(false);
  return false;
}

isSubsequence("hello", "hello Dear");
isSubsequence("book", "booklyn");
isSubsequence("abc", "cba");
isSubsequence("","ddd")