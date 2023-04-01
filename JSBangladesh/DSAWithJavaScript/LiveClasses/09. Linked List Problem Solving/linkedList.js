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

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }

  printSum() {
    let sum = 0;
    for (let node = this.head; node; node = node.next) {
      sum += node.value;
    }
    return sum;
  }

  printEvenSum() {
    let sum = 0;
    for (let node = this.head; node; node = node.next) {
      if (node.value % 2 === 0) sum += node.value;
    }
    return sum;
  }

  printOddSum() {
    let sum = 0;
    for (let node = this.head; node; node = node.next) {
      if (node.value % 2 === 1) sum += node.value;
    }
    return sum;
  }

  midValue() {
    let p1 = this.head;
    let p2 = this.head;

    while (p2.next) {
      p1 = p1.next;

      p2 = p2.next;
      if (p2.next) p2 = p2.next;

      // p2 = p2.next?.next;
    }

    return p1;
  }

  findFirstAndLastIndexOf(target) {
    const indices = [];
    for (let node = this.head, i = 0; node; node = node.next, i++) {
      if (node.value === target) {
        indices.push(i);
      }
    }
    return [indices[0], indices[indices.length - 1]];
  }

  findFirstAndLastIndexOf(target) {
    let first = null;
    let last = null;

    for (let node = this.head, i = 0; node; node = node.next, i++) {
      if (node.value === target) {
        if (first === null) first = i;
        else last = i;
      }
    }
    return [first, last];
  }

  isCircularList() {
    let x = this.head;
    let y = this.head;
    while (y) {
      x = x.next;
      y = y.next;
      if (y) y = y.next;

      if (x === y) return true;
    }
    return false;
  }

  // experimental method
  isCircularList() {
    let x = this.head;
    let y = this.head;
    while (y) {
      x = x.next?.next;
      y = y.next?.next?.next?.next;

      if (x === y) return true;
    }
    return false;
  }
}

const linkedList = new LinkedList(0);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
// linkedList.tail.next = linkedList.head;

function deleteSinglyLinkedListNode(node) {
  let next = node.next;

  node.value = next.value;
  node = next.next;
}

// deleteSinglyLinkedListNode(linkedList.head.next);

// console.log(linkedList.isCircularList());
linkedList.print();
