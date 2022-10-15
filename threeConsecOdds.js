// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

var threeConsecutiveOdds = function(arr) {
  let count = 0;

  for (const num of arr) {
      if (count === 3) return true;

      if (num % 2 === 1) count++;
      else count = 0;
  }

  return count === 3;
};
