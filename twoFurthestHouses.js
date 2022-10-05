/*There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

Return the maximum distance between two houses with different colors.

The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x. */

var maxDistance = function(colors) {
    
  let last = colors.length - 1;

  let i = 0;
  let j = colors.length - 1;

  while (colors[0] === colors[j] && colors[last] === colors[i]) {
      j--;
      i++;
  }
 
  return last - i;
 
};