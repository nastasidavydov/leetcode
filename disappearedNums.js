/* Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums. */

var findDisappearedNumbers = function(nums) {
    
  const set = new Set(nums);
  
  let count = 1;
  while (count <= nums.length) {
      
    if (!set.has(count)) {
        set.add(count);
    } else {
        set.delete(count)
    }
    
    count++;
  }
  
  return [...set];
  
};