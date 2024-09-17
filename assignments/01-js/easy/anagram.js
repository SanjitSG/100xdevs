/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length != str2.length) return false;

  let count = new Array(256).fill(0);

  // indexing str1 characters
  for (let c of str1) {
    count[c.charCodeAt(0)]++;
  }

  // indexing str2 characters
  for (let c of str2) {
    count[c.charCodeAt(0)]--;
  }

  for (let i of count) {
    if (i !== 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
