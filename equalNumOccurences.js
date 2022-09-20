/**Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency). */

var areOccurrencesEqual = function(s) {
  const frequencies = {};
  
  for (const ch of s) {
      
      if (!frequencies[ch]) {
          frequencies[ch] = 0;
      }
      
      frequencies[ch]++;
  }
  
  
  return Object.values(frequencies).every((freq) => freq === frequencies[s[0]]);
  
};