/**Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order. */


var intersection = function(nums) {
    
  const numFrequency = {};

  for (const numArr of nums) {
      for (const num of numArr) {
         if (!numFrequency[num]) {
             numFrequency[num] = 0;
         }
         numFrequency[num]++;
      }
  }

  const intersec = Object.keys(numFrequency).filter((num) => {
      return numFrequency[num] === nums.length;
  })

  return intersec.sort((a,b) => a - b)

};