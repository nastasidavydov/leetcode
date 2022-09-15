/* Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.
Return true if these subarrays exist, and false otherwise. */

var findSubarrays = function(nums) {
  const sums = new Set();
  
  for (let i = 0; i < nums.length - 1; i++) {
      let sum = nums[i] + nums[i + 1];
      
      if (sums.has(sum)) return true;
      sums.add(sum);
  }
  
  return false;
};