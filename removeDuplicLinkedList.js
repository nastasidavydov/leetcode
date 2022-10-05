/*Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well. */

var deleteDuplicates = function(head) {

  if (head === null) return head;
  
  let prevNode = head;
  let currentNode = head.next;

  while (currentNode !== null) {
      if (prevNode.val === currentNode.val) {
          prevNode.next = currentNode.next;
      } else {
          prevNode = prevNode.next;
      }
      currentNode = currentNode.next;
  }
  return head
};