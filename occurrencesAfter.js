/*Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

Return an array of all the words third for each occurrence of "first second third". */

var findOcurrences = function(text, first, second) {
    
  const words = text.split(' ');
  const ocurrences = [];
  let i = 0
  while (i < words.length - 2) {

      if (words[i] === first && words[i + 1] === second) {
          ocurrences.push(words[i + 2])
          
      }
      i++;
  }

  return ocurrences;
};