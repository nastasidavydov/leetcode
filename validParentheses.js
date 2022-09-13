/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.Open brackets must be closed in the correct order.Every close bracket has a corresponding open bracket of the same type. */

var isValid = function(s) {

  const validPairs = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  const stack = [];
  
  for (const curr of s) {
     
    let last = stack[stack.length - 1];
    stack.push(curr);
    
    if (validPairs[last] === curr) {
       
      stack.splice(-2, 2);
    }
      
  }

  return !stack.length

};