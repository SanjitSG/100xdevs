/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

//1. using regex
// function countVowels(str) {
//   return (str.match(/[aeiouAEIOU]/g) || []).length;
// }

// using for-of loop
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}
module.exports = countVowels;
