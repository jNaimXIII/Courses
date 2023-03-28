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

class DoublyLinkedList {
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

  prepend(value) {
    const node = new LinkedNode(value, this.head, null);
    this.head.prev = node;
    this.head = node;
    this.length++;
  }

  nodeAtIndex(index) {
    let node = this.head;
    for (let i = 1; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  insertAt(index, value) {
    if (index <= 1) {
      this.prepend(value);
    } else if (index >= this.length + 1) {
      this.append(value);
    } else {
      const previousNode = this.nodeAtIndex(index - 1);
      const node = new LinkedNode(value, previousNode.next, previousNode);
      previousNode.next.prev = node;
      previousNode.next = node;
      this.length++;
    }
  }

  updateAt(index, value) {
    const node = this.nodeAtIndex(index);
    node.value = value;
  }

  deleteAt(index) {
    const node = this.nodeAtIndex(index);
    if (index === 1) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index === this.length) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    this.length--;
  }

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }

  printBackwards() {
    let data = this.tail;
    while (data) {
      console.log(data.value);
      data = data.prev;
    }
  }
}

const linkedList = new DoublyLinkedList(10);
linkedList.append(11);
linkedList.prepend(9);
linkedList.insertAt(1, 9.5);

linkedList.deleteAt(2);

console.log(linkedList);

linkedList.print();
// linkedList.printBackwards();
