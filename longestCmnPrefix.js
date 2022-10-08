/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */


var longestCommonPrefix = function(strs) {
    
  let prefixLen = strs[0].length;
  let i = 1;
  while (i < strs.length) {

      let currentPrefix = strs[i].substring(0, prefixLen);
      if (strs[0].substring(0, prefixLen) !==  currentPrefix) {
          
          prefixLen--;
      } else {
          
          i++
      }
  }

  return strs[0].substring(0, prefixLen)
};