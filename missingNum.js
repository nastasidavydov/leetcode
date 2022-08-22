/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. */

var missingNumber = function(nums) {
  //   let count = 0;
  //   const numsSet = new Set(nums);
  
  //   while (count <= nums.length) {
      
  //     if(!numsSet.has(count)) {
  //       return count;
  //     }
  //     count++;
  //   }
      
  let missNum = nums.length;
  let count = 0;
  while (count < nums.length) {
      missNum += count - nums[count]
      count++;
  } 
  
  return missNum;
};