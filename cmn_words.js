/* Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays. */

var countWords = function(words1, words2) {
    
  const wordCount = {};
  let count = 0;

  for (let word of words1) {
  
    if ( !wordCount[word] ) {
      wordCount[word] = 1;
    } else {
      wordCount[word]++;
    }
  }
  
  for (let word of words2) {
  
    if (wordCount[word] <= 1) {
      wordCount[word]--;
    }
  }
  
  for (let word of words2) {
    if (wordCount[word] === 0) {
      count++;
    }
  }
  
  return count;
  
};