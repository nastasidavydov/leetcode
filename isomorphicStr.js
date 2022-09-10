/* Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. */


var isIsomorphic = function(s, t) {
    
  const pattern = {};
  const seen = new Set();
  
  if (s.length !== t.length) return false;
  

  for (let i = 0; i < s.length; i++) {
//    checks if the same char maps to different one
      if (pattern[s[i]] !== undefined && pattern[s[i]] !== t[i]) {
        return false;
      }
      
//    case when 2 char map to the same 
      
      if (pattern[s[i]] !== t[i] && seen.has(t[i])) return false;
      
      pattern[s[i]] = t[i]
      seen.add(t[i])
  }
  
  return true;
};