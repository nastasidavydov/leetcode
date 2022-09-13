/* Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums. */

var findShortestSubArray = function(nums) {
    
  let degree = 0;
  const numFrequency = {};
  const left = {};
  const right = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (!numFrequency[num]) {
      numFrequency[num] = 0;
      left[num] = i;
    }
    
    numFrequency[num]++;
    
    right[num] = i;

    if (numFrequency[num] > degree) {
      degree = numFrequency[num];
    }

  }

  
  let minLen = nums.length;
  for (let num of Object.keys(numFrequency)) {

    if (numFrequency[num] === degree) {
      let currLen = right[num] - left[num] + 1;
      minLen = Math.min(minLen, currLen)
    }
  }

  return minLen;

};