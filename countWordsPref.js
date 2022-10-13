/*You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s. */

var prefixCount = function(words, pref) {
  let count = 0;
  const prefLen = pref.length;
  for (const word of words) {
      if (word.substring(0, prefLen) === pref) count++;
  }

  return count;
};