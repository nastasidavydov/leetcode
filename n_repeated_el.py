# You are given an integer array nums, nums.length == 2 * n, Exactly one element of nums is repeated n times, return the element that is repeated n times.

def repeated_n_times(nums):
  num_count = {}
  n = len(nums) / 2
  
  for num in nums:
    if num not in num_count:
      num_count[num] = 0
    num_count[num] += 1
      
  
  for num in num_count:
    if num_count[num] == n:
      return num
