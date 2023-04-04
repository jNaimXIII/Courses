class Element {
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
      this.head = new Element(value);
      this.length += 1;

      return this;
    }

    let tail = this.head;
    for (let i = 1; i < this.length; i++) {
      tail = tail.next;
    }

    tail.next = new Element(value);
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
}

function isValidParenthesis(string) {
  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === ")") {
      if (stack.length === 0) return false;

      const prev = stack.pop();

      if (prev.value !== "(") {
        return false;
      }
    } else if (char === "(") {
      stack.push("(");
    }
  }

  return stack.length === 0;
}

console.log(isValidParenthesis("((()))")); // true
console.log(isValidParenthesis("(()")); // false
console.log(isValidParenthesis("())")); // false

var isValid = function (s) {
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const closings = Object.keys(pairs);

  const stack = [];

  for (const char of s) {
    if (closings.includes(char)) {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (pairs[char] !== last) return false;
    } else {
      stack.push(char);
    }
  }

  return true;
};

console.log(isValid("()[]{}")); // true
