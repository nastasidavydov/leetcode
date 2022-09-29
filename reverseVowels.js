/* Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once. */

var reverseVowels = function(s) {
  const vowels = new Set('aeiou');
  const swapped = s.split('');
  
  let i = 0;
  let j = s.length - 1;
  
  while (i < j) {
    let leftVowel = s[i].toLowerCase();
    let rightVowel = s[j].toLowerCase();
    
    if (!vowels.has(rightVowel)) {
      j--;
    }
    
    if (!vowels.has(leftVowel)) {
      i++;
    }
    
    if (vowels.has(rightVowel) && vowels.has(leftVowel)) {
      [swapped[i], swapped[j]] = [swapped[j], swapped[i]];
      i++;
      j--;
    }
  }
  
  return swapped.join('');
};