/*Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k. */

var containsNearbyDuplicate = function(nums, k) {

  const seen = {};

  for (let i = 0; i < nums.length; i++) {
   
    if (seen[nums[i]] !== undefined && Math.abs(seen[nums[i]] - i) <= k) {
      
      return true;
    }
    seen[nums[i]] = i;

  }

  return false;

    
};