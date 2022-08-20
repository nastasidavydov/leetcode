/* Given a string s, find the length of the longest substring without repeating characters. */

const lengthOfLongestSubstring = function(s) {
    
  const seen = new Map();
  let longSubstr = 0;
  
  let i = 0;
  let j = 0;
  
  while (i < s.length) {
      
    if (seen.has(s[i])) {
        
      longSubstr = Math.max(i - j, longSubstr);
      j = Math.max(seen.get(s[i]) + 1, j);
        
    }
    
    seen.set(s[i], i);
    i++;
  }

  return Math.max(longSubstr, s.length - j)
  
};