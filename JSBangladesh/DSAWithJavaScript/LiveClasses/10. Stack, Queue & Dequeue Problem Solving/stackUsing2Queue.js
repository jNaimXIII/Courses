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

class ImprovisedStack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();

    this.length = 0;
  }

  push(value) {
    this.q1.push(value);

    this.length += 1;

    return this;
  }

  pop() {
    for (let i = 1; i < this.length; i++) {
      this.q2.push(this.q1.pop().value);
    }

    const node = this.q1.pop();

    for (let i = 1; i < this.length; i++) {
      this.q1.push(this.q2.pop().value);
    }

    this.length -= 1;

    return node;
  }

  top() {
    for (let i = 1; i < this.length; i++) {
      this.q2.push(this.q1.pop().value);
    }

    const node = this.q1.pop();

    for (let i = 1; i < this.length; i++) {
      this.q1.push(this.q2.pop().value);
    }

    this.q1.push(node.value);

    return node;
  }

  empty() {
    return this.length === 0;
  }
}

const stack = new ImprovisedStack();

// stack.push(1);
// stack.push(2);
// console.log(stack.top()); // return 2
// console.log(stack.pop()); // return 2
// console.log(stack.pop()); // return 2
// console.log(stack.empty()); // return False

// Queue  -> Array
// pop    -> shift
// push   -> push

class MyStack {
  constructor() {
    this.queueOne = [];
    this.queueTwo = [];

    this.length = 0;
  }

  push(value) {
    this.queueOne.push(value);

    this.length += 1;
  }

  pop() {
    for (let i = 1; i < this.length; i++) {
      this.queueTwo.push(this.queueOne.shift());
    }

    const node = this.queueOne.shift();

    for (let i = 1; i < this.length; i++) {
      this.queueOne.push(this.queueTwo.shift());
    }

    this.length -= 1;

    return node;
  }

  top() {
    for (let i = 1; i < this.length; i++) {
      this.queueTwo.push(this.queueOne.shift());
    }

    const node = this.queueOne.shift();

    for (let i = 1; i < this.length; i++) {
      this.queueOne.push(this.queueTwo.shift());
    }

    this.queueOne.push(node);

    return node;
  }

  empty() {
    return this.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.top()); // return 4
console.log(myStack.pop()); // return 4
console.log(myStack.pop()); // return 3
console.log(myStack.top()); // return 2
