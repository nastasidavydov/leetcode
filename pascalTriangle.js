/* Given an integer numRows, return the first numRows of Pascal's triangle. */

var generate = function(numRows) {
    
  let triangle = new Array(numRows);

  for (let row = 0; row < numRows; row++) {
    triangle[row] = new Array(row + 1);
    for (let col = 0; col <= row; col++) {

      if (col === 0 || col === row) {
        triangle[row][col] = 1;
      
      } else {
        let aboveRow  = triangle[row-1]
        triangle[row][col] = (aboveRow[col-1] + aboveRow[col])
      }
    }
  }

  return triangle;
  
};