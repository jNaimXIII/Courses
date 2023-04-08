// asdfasdf

function firstDuplicate(string) {
  let chars = {};

  for (const char of string) {
    if (chars[char]) {
      return char;
    } else {
      chars[char] = 1;
    }
  }

  return "";
}

console.log(firstDuplicate("abcdabcd"));
