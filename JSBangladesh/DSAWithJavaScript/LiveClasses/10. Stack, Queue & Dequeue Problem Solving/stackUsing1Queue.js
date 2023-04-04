class Stack {
  constructor() {
    this.queue = [];

    this.length = 0;
  }

  push(x) {
    this.queue.push(x);

    this.length += 1;
  }

  pop() {
    for (let i = 1; i < this.length; i++) {
      this.queue.push(this.queue.shift());
    }

    const node = this.queue.shift();

    for (let i = 1; i < this.length; i++) {
      this.queue.push(this.queue.shift());
    }

    this.length -= 1;

    return node;
  }

  top() {
    for (let i = 1; i < this.length; i++) {
      this.queue.push(this.queue.shift());
    }

    const node = this.queue.shift();

    for (let i = 1; i < this.length; i++) {
      this.queue.push(this.queue.shift());
    }

    this.queue.push(node);

    return node;
  }

  empty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.top()); // return 4
console.log(myStack.pop()); // return 4
console.log(myStack.pop()); // return 3
console.log(myStack.top()); // return 2
