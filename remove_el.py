# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.


 def removeElement(nums):
  k = 0
  
  for num in nums:
    if num != val:
      nums[k] = num
      k += 1
          
  return k