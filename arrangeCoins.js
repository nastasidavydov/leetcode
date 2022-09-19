/*You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build. */

var arrangeCoins = function(n) {
    
  row = 0;
  
  while (n > 0) {
      
      if (n - (row + 1) < 0) return row;
      
     n -= ++row; 
  
  }
  
  return row;
};