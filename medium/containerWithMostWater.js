var maxArea = function(height) {
    
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  
  while (i < j) {
     
    let len = Math.min(height[i], height[j])
    let width = j - i;
    
    max = Math.max(max, len * width)
    
    if (height[j] > height[i]) i++;
    else j--;
      
  }
  

  return max;
};