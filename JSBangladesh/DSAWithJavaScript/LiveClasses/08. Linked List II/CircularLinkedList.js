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

class CircularDoublyLinkedList {
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
    const node = new LinkedNode(value, this.head, this.tail);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new LinkedNode(value, this.head, this.tail);
    this.head.prev = node;
    this.head = node;
    this.length++;
  }

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }
}

const linkedList = new DoublyLinkedList(10);
linkedList.append(11);
linkedList.prepend(9);

console.log(linkedList);

linkedList.print();
linkedList.printBackwards();
