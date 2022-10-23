/*Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

  */

var maxNumberOfBalloons = function(text) {
    
  const charCount = {
      b: 0,
      a: 0, 
      l: 0,
      o: 0,
      n: 0
  }
  
  
  
  for (const char of text) {
      
      if (charCount[char] !== undefined) {
          charCount[char]++
      }
  }
  
let count = charCount['b'];
  for (const char of Object.keys(charCount)) {
      
      if(charCount[char] < count) {
          count = charCount[char];
      }
      
      if (char === 'o' || char === 'l') {
          
          count = Math.min(Math.floor(charCount[char] / 2), count)
      }
  }
  
  return count;
};