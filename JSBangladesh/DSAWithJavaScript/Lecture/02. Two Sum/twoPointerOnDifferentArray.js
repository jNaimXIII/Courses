const arrOne = [1, 2, 3, 4];
const arrTwo = [1, 1, 1, 2, 2];

const sorted = [];

let onePointer = 0;
let twoPointer = 0;

while (onePointer < arrOne.length && twoPointer < arrTwo.length) {
  if (arrOne[onePointer] <= arrTwo[twoPointer]) {
    sorted.push(arrOne[onePointer]);
    onePointer++;
  } else {
    sorted.push(arrTwo[twoPointer]);
    twoPointer++;
  }
}

if (onePointer < arrOne.length) {
  for (let i = onePointer; i < arrOne.length; i++) {
    sorted.push(arrOne[i]);
  }
} else if (twoPointer < arrTwo.length) {
  for (let i = twoPointer; i < arrTwo.length; i++) {
    sorted.push(arrTwo[i]);
  }
}

console.log(sorted);
