// Individual item.
class LinkedNode {
  value;
  next;

  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

// Collection of the items. (Singly Linked)
class LinkedList {
  head;
  tail;
  length;

  constructor(data) {
    this.head = this.tail = new LinkedNode(data);
    this.length = 1;
  }

  append(data) {
    this.tail = this.tail.next = new LinkedNode(data);
    this.length++;
  }

  prepend(data) {
    this.head = new LinkedNode(data, this.head);
    this.length++;
  }

  insertAt(index, data) {
    if (index <= 1) {
      this.prepend(data);
    } else if (index >= this.length + 1) {
      this.append(data);
    } else {
      let previousNode = this.nodeAtIndex(index - 1);

      const node = new LinkedNode(data, previousNode.next);
      previousNode.next = node;
      this.length++;
    }
  }

  nodeAtIndex(index) {
    let node = this.head;
    for (let i = 1; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  print() {
    for (let node = this.head; node !== null; node = node.next) {
      console.log(node.value);
    }
  }

  updateAt(index, data) {
    const node = this.nodeAtIndex(index);
    node.value = data;
  }

  deleteAt(index) {
    if (index === 1) {
      this.head = this.head.next;
    } else if (index === this.length) {
      const previousNode = this.nodeAtIndex(index - 1);
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      const previousNode = this.nodeAtIndex(index - 1);
      previousNode.next = previousNode.next.next;
    }

    this.length--;
  }
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.insertAt(2, 1.5);
list.insertAt(4, 2.5);

list.deleteAt(5);

list.print();

console.log({ list });
