/* The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1
Given n, calculate F(n) */

const fib = function(n) {
    
  let fib = new Array(n+1);
  fib[0] = 0;
  fib[1] = 1;

  count = 2;

  while (count <= n) {
    fib[count] = fib[count - 1] + fib[count - 2];
    count++;
  }

  return fib[n];
  
};

// recursive solution

function fibRecursion(n) {

  if (n === 1) return 1;

  if (n === 0) return 0;


  return fibRecursion(n-1) + fibRecursion(n-2);
}