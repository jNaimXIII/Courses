// Individual item.
class LinkedNode {
  value;
  next;

  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

// Collection of the items.
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
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log({ list });
