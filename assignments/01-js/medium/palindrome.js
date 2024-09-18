/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str.toLowerCase().trim();
  let n = str.length;
  let i = 0;
  while (i < n / 2) {
    if (str[i] != str[n - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
}

module.exports = isPalindrome;
