/*Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0]. */

var flipAndInvertImage = function(image) {
    
  for (let i = 0; i < image.length; i++) {
      let currRow = image[i];
      
      let j = 0;
      let k = currRow.length - 1;
      
      while (j <= k) {
          
          [currRow[j], currRow[k]] = [(1 - currRow[k]), (1 - currRow[j])]
          
          j++;
          k--;
      }
      
  }
  
  return image
  
};