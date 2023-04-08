const numberMap = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

let num = 1234;
let numString = String(num);

let output = "";
for (let i = 0; i < numString.length; i++) {
  output += numberMap[numString[i]];
  if (i < numString.length - 1) {
    output += " ";
  }
}
console.log({ output });
