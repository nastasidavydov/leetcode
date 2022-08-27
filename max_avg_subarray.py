# Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 

def findMaxAverage(nums, k):
        
  curr_sum = 0
  
  for i in range(k):
    curr_sum += nums[i]
  
  max = curr_sum
  
  for i in range(k, len(nums)):
    curr_sum += nums[i] - nums[i-k]
    
    if curr_sum > max:
      max = curr_sum
  
  return max / k