/*You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string. */

var countPrefixes = function(words, s) {
  let count = 0;

  for (const word of words) {
      let len = word.length;

      if (word === s.substring(0,len)) count++;
  }

  return count;
};