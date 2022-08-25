# Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M). check if there exists two indices i and j

def checkIfExist(arr):
  nums = set()
  
  for num in arr:
      
    if num / 2 in nums or num * 2 in nums:
        return True
    
    nums.add(num)
      
  return False