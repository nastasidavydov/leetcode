/* Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string. */

var maxLengthBetweenEqualCharacters = function(s) {
    
  let max = -1;
  
  const seen = {};
  
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if (seen[char] !== undefined) {
          max = Math.max(max, i - seen[char] - 1);
          
      } else {
          seen[char] = i
      }
  }
  
  return max;
  
};