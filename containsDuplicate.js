/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */

const containsDuplicate = nums => {

  const numsSet = new Set(nums);

  return nums.length !== numsSet.size;
}

console.log(containsDuplicate([1,2,3,1]))


/* 2 approach using hash table */


const containsDuplicate2 = nums => {

  const numsCount = {};

  for (let num of nums) {
    if (numsCount[num]) return true;

    numsCount[num] = 1;
  }

  return false;
}
