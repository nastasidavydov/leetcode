/* Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1. */

var findLucky = function(arr) {
  let luckyMax = -1;
  const frequencies = {};
  
  for (const num of arr) {
    if (!frequencies[num]) {
      frequencies[num] = 0;
    }
    frequencies[num]++;
  }
  
  const nums = new Set(arr);
  nums.forEach((num) => {
     
    if (num === frequencies[num]) {
        
      luckyMax = Math.max(num, luckyMax);
    }
  })
  
  return luckyMax;
};