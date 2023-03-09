/**
 * sorting an array using selection sorting algorithm (descending)
 * @param {number[]} arr
 */
function selectionSort(arr) {
  // outer loop iterating over every item
  for (let i = 0; i < arr.length; ++i) {
    // minimum value's index for current iteration
    let minIndex = i;

    // inner loop iterating over next items of outer loop's item
    for (let j = i; j < arr.length; ++j) {
      // selecting the minimum value's index
      if (arr[j] < arr[minIndex]) {
        min = arr[j];
        minIndex = j;
      }
    }

    // swapping values of min index to current index
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
}

// unordered array
let arr = [10, 5, 12, 7, 8, 3, 100, 60, 5, 10, 8, 7];

// examples
selectionSort(arr);
console.log(arr);
