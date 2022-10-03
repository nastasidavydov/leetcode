/*Given a binary array nums, return the maximum number of consecutive 1's in the array. */

var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let count = 0;

  for (const num of nums) {

      if (num === 1) count++;
      else {
          max = Math.max(max, count);
          count = 0;
      }
  }

  return Math.max(count, max)
};