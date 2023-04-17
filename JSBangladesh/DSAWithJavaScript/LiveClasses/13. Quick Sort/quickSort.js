let count = 0;

function quickSort(arr, left, right) {
  count++;

  if (left >= right) return arr;

  const pivot = arr[left];

  let pivotIndex = left;
  for (let i = left; i <= right; i++) {
    if (arr[i] < pivot) pivotIndex++;
  }

  arr[left] = arr[pivotIndex];
  arr[pivotIndex] = pivot;

  let swapIndex = left;
  for (let i = left; i <= right; i++) {
    if (swapIndex >= pivotIndex) break;

    if (arr[i] < pivot) {
      const temp = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = temp;

      swapIndex++;
    }
  }

  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);

  return arr;
}

function generateRandomArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

const arr = generateRandomArray(100);
console.log(quickSort(arr, 0, arr.length - 1));
console.log("iteration count", count);

function verifySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

console.log("is sorted", verifySorted(arr));
