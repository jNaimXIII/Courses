/**
 * Check if a word is a palindrome or not.
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
  for (let i = 0, j = word.length - 1; i <= j; i++, j--) {
    // check for inequality from opposite ends
    if (word[i] !== word[j]) return false;
  }

  return true;
}

// examples
console.log(isPalindrome("wow"));
console.log(isPalindrome("hannah"));
console.log(isPalindrome("abcdedcba"));
console.log(isPalindrome("siuuuuuu"));
