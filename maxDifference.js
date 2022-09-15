/* Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

Return the maximum difference. If no such i and j exists, return -1. */

var maximumDifference = function(nums) {
    
  let max = -1;
  let min = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      
    if (nums[i] > min) {
        
        max = Math.max(max, nums[i] - min);
    }
    
    if (nums[i] < min) {
        min = nums[i];
    }
  }
  
  return max;
  
};