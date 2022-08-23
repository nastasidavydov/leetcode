/* A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order. */


var uncommonFromSentences = function(s1, s2) {
  let words = `${s1} ${s2}`.split(' ');
  
  let wordsCount = {};
  
  for (let word of words) {
      
    if (wordsCount[word]) {
        wordsCount[word]++;
    } else {
        wordsCount[word] = 1;
    }
  }

  return Object.keys(wordsCount).filter(key => wordsCount[key] === 1);

};