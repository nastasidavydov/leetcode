/* A string is good if there are no repeated characters.
  Given a string s​​​​​, return the number of good substrings of length three in s */

const countGoodSubstrings = function(s) {
  let count = 0;
  
  if (s.length < 3) return count;

  for (let i = 0; i <= s.length - 3; i++) {
 
    let charSet = new Set(s.slice(i, i + 3))

    if (charSet.size === 3) {
     count++;
    }
  }

  return count;

  
};