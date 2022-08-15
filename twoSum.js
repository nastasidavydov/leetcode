
/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. */

const twoSum = (nums, target) => {

  const numToInd = {};

  for (let i = 0; i < nums.length; i++) {
    numToInd[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let num2 = target - nums[i];
    if (numToInd[num2] && numToInd[num2] !== i) {
      return [i, numToInd[num2]];
    }
  }

}

