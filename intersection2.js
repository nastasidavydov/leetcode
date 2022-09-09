/*Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order. */

var intersect = function(nums1, nums2) {
    
  const intersec = [];

  const numCount = {};

  for (const num of nums1) {

    if (!numCount[num]) {
      numCount[num] = 1;
    } else {
      numCount[num]++;
    }
  }

  for (const num of nums2) {

    if (numCount[num] > 0) {
      intersec.push(num);
      numCount[num]--;
    }
  }

  return intersec;
};