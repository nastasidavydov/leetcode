
/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1]. */



var searchRange = function(nums, target) {
    
  const ans = [-1, -1];
  
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
      
      let middle = Math.floor((right + left) / 2);
      
      if (nums[middle] === target) {

          let i = middle;
          let j = middle;
         while(nums[i] === target) {
             
             i++
         }
          
          while(nums[j] === target) {
             
             j--
         }
          
          return [j+1, i-1];
          
      }
      
      if (target < nums[middle]) {
          right = middle - 1;
      }
      
      if (target > nums[middle]) {
          left = middle + 1;
      }
  }
  
  
  
  return ans;
  
};