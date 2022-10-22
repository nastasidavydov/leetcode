/*A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i]. */

var heightChecker = function(heights) {
    
  let max = heights[0];
  let wrongPlaceCount = 0;
  
  for (let height of heights) {
      if (height > max) max = height;
  }
  
  let studentHeightCount = new Array(max+1).fill(0);
  
  for (let height of heights) {
      studentHeightCount[height]++
  }

  let j = 0;
  for (let i = 1; i < studentHeightCount.length; i++) {
      let count =  studentHeightCount[i]
      if ( count !== 0) {
          
          while (count > 0) {
              if (heights[j] !== i) wrongPlaceCount++;
              j++
              count--;
          }
      }
  }
  
  return wrongPlaceCount;
};