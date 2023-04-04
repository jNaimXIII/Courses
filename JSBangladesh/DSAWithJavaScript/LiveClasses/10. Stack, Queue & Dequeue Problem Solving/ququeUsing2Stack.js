class QueueItem {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    if (!this.head) {
      this.head = new QueueItem(value);
      this.length += 1;

      return this;
    }

    let tail = this.head;
    for (let i = 1; i < this.length; i++) {
      tail = tail.next;
    }

    tail.next = new QueueItem(value);
    this.length += 1;

    return this;
  }

  pop() {
    if (this.length === 1) {
      const node = this.head;

      this.head = null;
      this.length = 0;

      return node;
    }

    let tail = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      tail = tail.next;
    }

    const node = tail.next;

    tail.next = null;
    this.length -= 1;

    return node;
  }

  print() {
    console.log("START =======");
    for (let n = this.head; n; n = n.next) {
      console.log(n.value);
    }
    console.log("END =======");
  }
}

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();

    this.length = 0;
  }

  push(value) {
    this.s1.push(value);

    this.length += 1;

    return this;
  }

  pop() {
    for (let i = 1; i < this.length; i++) {
      this.s2.push(this.s1.pop().value);
    }

    const node = this.s1.pop();

    for (let i = 1; i < this.length; i++) {
      this.s1.push(this.s2.pop().value);
    }

    this.length -= 1;

    return node;
  }

  peek() {
    for (let i = 1; i < this.length; i++) {
      this.s2.push(this.s1.pop().value);
    }

    const node = this.s1.pop();

    this.s1.push(node.value);

    for (let i = 1; i < this.length; i++) {
      this.s1.push(this.s2.pop().value);
    }

    return node;
  }

  empty() {
    return this.length === 0;
  }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

// queue.s1.print();

console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
console.log(queue.pop()); // 3
console.log(queue.empty()); // false
console.log(queue.pop()); // 4
console.log(queue.peek()); // 5
console.log(queue.pop()); // 5
console.log(queue.empty()); // true

// queue.s1.print();
//
// // console.log(queue.peek()); // 2
//
// queue.push(5);
//
// queue.s1.print();

// console.log(queue);

class MyQueue {
  s1;
  s2;
  length;

  constructor() {
    this.s1 = [];
    this.s2 = [];

    this.length = 0;
  }

  push(x) {
    this.s1.push(x);

    this.length += 1;
  }

  pop() {
    for (let i = 1; i < this.length; i++) {
      this.s2.push(this.s1.pop());
    }

    const node = this.s1.pop();

    for (let i = 1; i < this.length; i++) {
      this.s1.push(this.s2.pop());
    }

    this.length -= 1;

    return node;
  }

  peek() {
    for (let i = 1; i < this.length; i++) {
      this.s2.push(this.s1.pop());
    }

    const node = this.s1.pop();

    this.s1.push(node);

    for (let i = 1; i < this.length; i++) {
      this.s1.push(this.s2.pop());
    }

    return node;
  }

  empty() {
    return this.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
