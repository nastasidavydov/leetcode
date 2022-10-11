/*Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward. */

var firstPalindrome = function(words) {
  let i = 0
  while (i < words.length) {
      let word = words[i];
      let left = 0;
      let right = word.length - 1;
      
      while (left <= right) {
          if (word[left] !== word[right]) {
          
          break;
          } else {
          
          if (right - left <= 2) return word;

          left++;
          right--;
          }
      }
      i++;
  }
  return '';
};