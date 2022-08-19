# Given an array nums of size n, return the majority element.

def majorityElement(nums):
        
  num_count = {}
  majority = nums[0]
  
  for num in nums:
      
    if num not in num_count:
      num_count[num] = 0
    
    num_count[num] += 1
    
    if num_count[num] > num_count[majority]:
      majority = num
          
  
  return majority