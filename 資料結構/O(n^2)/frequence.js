function abc(a1, a2) {
  let str1 = a1.split("");
  let str2 = a2.split("");

  if (str1.length !== str2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (counter1[str1[i]]) {
      counter1[str1[i]]++;
    } else {
      counter1[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (counter2[str2[i]]) {
      counter2[str2[i]]++;
    } else {
      counter2[str2[i]] = 1;
    }
  }
  // console.log(counter1, counter2);
  for (let i in counter1) {
    // console.log("x " + i + "" + counter1[i]);
    // console.log("y " + i + "" + counter2[i]);
    if (!counter2[i]) {
      return false;
    }
    if (counter2[i] !== counter1[i]) {
      return false;
    }
  }
  return true;
}

abc("aabc", "abbc");
abc("aabb", "abba");
