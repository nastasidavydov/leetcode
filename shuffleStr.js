/* You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string. */

var restoreString = function(s, indices) {
  let shuffled = new Array(s.length);
  
  for (let i = 0; i < indices.length; i++) {
     
      shuffled[indices[i]] = s[i];
  }
  
  return shuffled.join('');
};