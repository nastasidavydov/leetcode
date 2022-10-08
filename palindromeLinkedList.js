/*Given the head of a singly linked list, return true if it is a palindrome or false otherwise. */

var isPalindrome = function(head) {
  const nums = [];
  if (head.next === null) return true;
  let currentNode = head;

  while (currentNode !== null) {
      nums.push(currentNode.val)
      
      currentNode = currentNode.next;
  }
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
      if (nums[i] !== nums[j]) {
          return false;
      }
      i++;
      j--;
  }

  return true;
};