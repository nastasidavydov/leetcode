/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place */


const moveZeroes = nums => {

  let n = 0;

  for (let num of nums) {
    if (num) {
      nums[n] = num;
      n++;
    }
  }

 
  while (n < nums.length) {
    
    nums[n] = 0;
    n++;
  }

  return nums;
}