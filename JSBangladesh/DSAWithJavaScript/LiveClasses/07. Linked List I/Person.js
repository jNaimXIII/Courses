class Person {
  // // JavaScript doesn't need explicit property declarations.
  // name;
  // age;
  // email;

  constructor(name, age, email) {
    // `this` refers to the current object.
    this.name = name;
    this.age = age;
    this.email = email;
  }

  greet() {
    return `Hi! I'm ${this.name} and ${this.age} years old.`;
  }
}

const p1 = new Person("John", 20, "john@mail.com");
const p2 = new Person("Jane", 21, "jane@mail.com");
const p3 = new Person("Jack", 22, "jack@mail.com");

console.log({ p1, p2, p3 });

console.log(p1.greet());

// tail
let o4 = {
  value: 4,
  next: null,
};

let o3 = {
  value: 3,
  next: o4,
};

let o2 = {
  value: 2,
  next: o3,
};

// head
let o1 = {
  value: 1,
  next: o2,
};

console.log({ o1, o2, o3, o4 });

// Shape of a linked list.
let list = {
  value: 10,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: 40,
        next: null,
      },
    },
  },
};
