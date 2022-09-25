/*Return the sum of all the unique elements of nums. */

var sumOfUnique = function(nums) {
  const frequency = {};
  let sum = 0;
  for (const num of nums) {
     
    if (frequency[num] === undefined) {
      frequency[num] = 0;
    }
     
    frequency[num]++;
  }
  
  Object.keys(frequency).forEach((num) => {if (frequency[num] === 1) sum += num * 1;})
  
  return sum;
};