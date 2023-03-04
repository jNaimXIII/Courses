/**
 * search through an array for a target value
 * @param {(number | string)[]} arr
 * @param {number | string} target
 * @returns {number} index of target if found, otherwise -1
 */
function linearSearch(arr, target) {
  // iterate over array
  for (let currentIndex = 0; currentIndex < arr.length; ++currentIndex) {
    const currentElement = arr[currentIndex];

    if (currentElement === target) {
      // early return with index of target
      return currentIndex;
    }
  }

  // explicitly return -1 if target is not found
  return -1;
}

// unordered array
const arr = [10, 20, 5, 15, 25, 45, 100];

// examples
console.log(linearSearch(arr, 15));
console.log(linearSearch(arr, 0));
