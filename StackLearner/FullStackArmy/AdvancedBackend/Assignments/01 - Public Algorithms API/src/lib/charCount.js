/**
 * Get the number of times each character occurred in a string.
 *
 * @param {string} string
 */
export function charCount(string) {
  const count = {};

  for (const char of string) {
    if (!count[char]) count[char] = 1;
    else count[char]++;
  }

  const typeCount = {
    alphabets: 0,
    numbers: 0,
    symbols: 0,
  };

  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

  for (const char in count) {
    if (alphabets.includes(char.toLowerCase()))
      typeCount.alphabets += count[char];
    else if (numbers.includes(char)) typeCount.numbers += count[char];
    else typeCount.symbols += count[char];
  }

  return typeCount;
}
