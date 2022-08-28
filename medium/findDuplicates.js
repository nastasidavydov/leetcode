/* Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space. */

var findDuplicates = function(nums) {
  const duplicates = [];
  
// 1. iterate - flag element that located at the index corresp to that current num by flipping it
// 2. check if the ele of the current num index is flipped (i.e seen) - add to array
  
  
  for (let i = 0; i < nums.length; i++) {
      let num = Math.abs(nums[i]);
      
      if (nums[num - 1] < 0) duplicates.push(num);
      
      nums[num - 1] = -nums[num - 1];
  }
  
  return duplicates;
};