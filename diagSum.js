/* Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal. */

var diagonalSum = function(mat) {
  let sum = 0;
  
  let j = mat.length - 1;
  for (let i =0; i < mat.length; i++) {
    sum += mat[i][i];
    
    if (i !== j) sum += mat[i][j];
    
    j--;
  }
  
  return sum

};