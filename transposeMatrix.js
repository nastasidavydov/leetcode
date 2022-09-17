/*Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices. */

var transpose = function(matrix) {
    
  const transposed = new Array(matrix[0].length);
  
  for (let row = 0; row < transposed.length; row++) {
    transposed[row] = new Array(matrix.length);
    
    for (let col = 0; col < matrix.length; col++) {
      transposed[row][col] = matrix[col][row];
    }
  }
  
  return transposed;
};