def intersection(nums1, nums2):
  # intersec = set()
  # s = set(nums2)

  # for num in nums1:
  #     if num in s:
  #         intersec.add(num)

  # return list(intersec)

  return list(set(nums1).intersection(set(nums2)))

