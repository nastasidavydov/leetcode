# Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

def shortestToChar(s, c):

  dist = [len(s) - 1] * len(s)
  target_ind = len(s) - 1
  
  for i in range(len(s)):
      
    if s[i] == c:
        target_ind = i
        
    dist[i] = abs(target_ind - i)
          
  for i in range(len(s)-1, -1, -1):
      
    if s[i] == c:
        
      target_ind = i
        
    if abs(target_ind - i) < dist[i]:
      dist[i] = abs(target_ind - i)
          
          
  return dist

print(shortestToChar('loveleetcode', 'e'))