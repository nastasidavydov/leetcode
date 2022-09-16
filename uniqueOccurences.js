// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

var uniqueOccurrences = function(arr) {
    
  const frequency = {};
  
  for (const num of arr) {
      
      if (!frequency[num]) {
          frequency[num] = 0;
      }
      frequency[num]++; 
  }
  
  const unique = new Set(Object.values(frequency));
  
  return unique.size === Object.keys(frequency).length;
};