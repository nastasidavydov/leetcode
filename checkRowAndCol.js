/*An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

1 <= matrix[i][j] <= n

 */

var checkValid = function(matrix) {
    
  for (let row = 0; row < matrix.length; row++) {
      if (new Set(matrix[row]).size !== matrix.length) {
          return false;
      }
      const colSet = new Set();
      for (let col = 0; col < matrix.length; col++) {
          if (colSet.has(matrix[col][row])) return false;
          colSet.add(matrix[col][row])
      }
  }

  return true;
};