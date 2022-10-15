/*You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible. */


var numberOfPairs = function(nums) {
  const countNums = {};
  let pairs = 0;
  let leftover = 0;
  for (const num of nums) {
      if (!countNums[num]) {
          countNums[num] = 0;
      }

      countNums[num]++;

      if (countNums[num] % 2 === 0) {
          countNums[num] = countNums[num] % 2;
          pairs++
      }
  }

  Object.values(countNums).forEach((value) => {
      if (value > 0) leftover++
  })

  return [pairs, leftover]
};