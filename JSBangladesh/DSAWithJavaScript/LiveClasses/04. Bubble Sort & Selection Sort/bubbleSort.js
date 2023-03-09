/**
 * sort an array using bubble sorting algorithm (ascending)
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  // outer loop iterating over every item
  for (let i = 0; i < arr.length; ++i) {
    // inner loop iterating over next items of outer loop's item
    for (let j = i + 1; j < arr.length; ++j) {
      // swapping values based on sorting condition
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        // fancier version of swapping in js without introducing a variable
        // [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}

// unordered array
let arr = [10, 5, 12, 7, 8, 3, 100, 60, 5, 10, 8, 7];

// examples
bubbleSort(arr);
console.log(arr);
