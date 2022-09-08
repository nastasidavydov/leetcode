/* Given a string s consisting of lowercase English letters, return the first letter to appear twice.
A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
s will contain at least one letter that appears twice. */

var repeatedCharacter = function(s) {
  const seen = new Set();
  
  for (const char of s) {
      
      if (seen.has(char)) return char;
      
      seen.add(char);
  }
};