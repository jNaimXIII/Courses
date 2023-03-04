/**
 * search through an array for a target value
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} index of target if found, otherwise -1
 */
function orderAgnosticBinarySearch(arr, target) {
  const isAscending = arr[0] < arr[arr.length - 1];

  let startIndex = 0;
  let endIndex = arr.length - 1;

  let middleIndex;

  // run loop until startIndex is less than or equal to endIndex
  while (startIndex <= endIndex) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);

    const middleValue = arr[middleIndex];
    if (target === middleValue) {
      // early return with index of target
      return middleIndex;
    } else if (target < middleValue) {
      if (isAscending) {
        // reduce endIndex boundary
        endIndex = middleIndex - 1;
      } else {
        // increase startIndex boundary
        startIndex = middleIndex + 1;
      }
    } else if (target > middleValue) {
      if (isAscending) {
        // increase startIndex boundary
        startIndex = middleIndex + 1;
      } else {
        // reduce endIndex boundary
        endIndex = middleIndex - 1;
      }
    }
  }

  // explicitly return -1 if target is not found
  return -1;
}

// ordered array (ascending)
const ascArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const descArr = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

// examples
console.log(orderAgnosticBinarySearch(ascArr, 20));
console.log(orderAgnosticBinarySearch(descArr, 20));
