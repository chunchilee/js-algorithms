let thousandDigits = [7, 3, 1, 6, 7, 1, 7];

function largestProduct(n) {
  let left = 0;
  let right = n - 1;
  let currentProduct ;
  let maxProduct = -Infinity;

  while (right < thousandDigits.length) {
    // currentProduct = 1;
    for (let i = left; i <= right; i++) {
      currentProduct *= thousandDigits[i];
    }
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
    left++;
    right++;
  }
  console.log(maxProduct);
}

largestProduct(2);
