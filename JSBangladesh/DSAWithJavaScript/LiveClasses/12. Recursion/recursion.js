function demo(n, limit) {
  // base case / u-turn
  if (n > limit) {
    return;
  }

  // computation
  console.log(n);

  // recursive call
  demo(n + 1, limit);
}

// demo(1, 10);

function arrayTraversal(arr, currentIndex = 0) {
  if (currentIndex >= arr.length) return;

  console.log(arr[currentIndex]);

  arrayTraversal(arr, currentIndex + 1);
}

// arrayTraversal([1, 2, 3], 0);

function arrayReverse(arr, start, end) {
  if (start >= end) return arr;

  [arr[start], arr[end]] = [arr[end], arr[start]];

  return arrayReverse(arr, start + 1, end - 1);
}

console.log(arrayReverse([1, 2, 3], 0, 2));

class LinkedNode {
  value;
  next;
  prev;

  constructor(data, next = null, prev = null) {
    this.value = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  head;
  tail;
  length;

  constructor(value) {
    const node = new LinkedNode(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    const node = new LinkedNode(value, null, this.tail);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  print(node = this.head) {
    if (node === null) return;

    console.log(node.value);

    this.print(node.next);
  }
}

// const linkedList = new LinkedList(0);
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
//
// linkedList.print();

function isPalindrome(string, start, end) {
  if (start >= end) return true;

  if (string[start] !== string[end]) return false;

  return isPalindrome(string, start + 1, end - 1);
}

// console.log(isPalindrome("abc", 0, 2));
// console.log(isPalindrome("aba", 0, 2));
// console.log(isPalindrome("abcdcba", 0, 6));
// console.log(isPalindrome("abcddcba", 0, 7));
