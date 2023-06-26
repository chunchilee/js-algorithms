function intersection(a1, a2) {
  let result = [];
  let a3 = a1.concat(a2);
  let counter = {};

  for (let i = 0; i < a3.length; i++) {
    if (counter[a3[i]]) {
      counter[a3[i]]++;
    } else {
      counter[a3[i]] = 1;
    }
  }
  // console.log(counter);
  for (let i in counter) {
    if (counter[i] >= 2) {
      result.push(i);
    }
  }
  console.log(result);
}

intersection([1, 3, 5, 7, 9], [5, 4, 6, 3, 1]);
