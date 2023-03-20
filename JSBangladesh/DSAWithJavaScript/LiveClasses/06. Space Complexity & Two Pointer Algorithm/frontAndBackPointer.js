// original array
let arr = [5, 7, 6, 3, 10, 1];

/*
 * Swap values from front and back of the array
 */
for (let i = 0, k = arr.length - 1; i <= k; i++, k--) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

// examples
// console.log(arr);
