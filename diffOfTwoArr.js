/*Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order. */

var findDifference = function(nums1, nums2) {
  const nums2Set = new Set(nums2);
  const nums1Set = new Set(nums1);

  for (const num of nums1) {
      if (nums2Set.has(num)) {
          nums1Set.delete(num);
          nums2Set.delete(num);
      }
  }


  return [[...nums1Set], [...nums2Set]];
};