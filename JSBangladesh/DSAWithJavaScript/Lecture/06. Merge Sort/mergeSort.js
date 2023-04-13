// let arr = [20, 5, 40, 60, 10, 1];

let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log("unsorted", arr);
mergeSort(arr, 0, arr.length - 1);
console.log("sorted  ", arr);

function mergeSort(arr, left, right) {
  if (left >= right) return;

  let mid = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);

  const sorted = joinSortedArray(
    arr.slice(left, mid + 1),
    arr.slice(mid + 1, right + 1)
  );
  for (let i = left, j = 0; i <= right; i++, j++) {
    arr[i] = sorted[j];
  }

  return arr;
}

function joinSortedArray(arr1, arr2) {
  let a1 = 0;
  let a2 = 0;

  let sorted = [];

  while (true) {
    if (a1 === arr1.length) {
      sorted = sorted.concat(arr2.slice(a2));
      break;
    }

    if (a2 === arr2.length) {
      sorted = sorted.concat(arr1.slice(a1));
      break;
    }

    let av1 = arr1[a1];
    let av2 = arr2[a2];

    if (av1 <= av2) {
      sorted.push(av1);
      a1++;
    } else {
      sorted.push(av2);
      a2++;
    }
  }

  return sorted;
}
