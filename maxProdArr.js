/* Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1). */

var maxProduct = function(nums) {
    
  let max1 = 0;
  let max2 = 0;
  
  let i = 0;
  let j = nums.length-1;
  
  while (i < j) {
      
      max1 = Math.max(nums[i], max1)
      max2 = Math.max(nums[j], max2)
      
      if (nums[i] < nums[j]) i++;
      else j--;
  }
  
  
  return (max1-1) * (max2-1);
  
};