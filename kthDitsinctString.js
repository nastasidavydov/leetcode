/* A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "". */

var kthDistinct = function(arr, k) {
  const strCount = {};
 
  for (let str of arr) {
   if (!strCount[str]) {
     strCount[str] = 1;
   } else {
     strCount[str]++;
   }
  }

  const distStr = Object.keys(strCount).filter((key) => strCount[key] === 1)

  return distStr[k-1] || '';
};
