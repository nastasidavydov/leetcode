/*Given the head of a singly linked list, reverse the list, and return the reversed list. */

var reverseList = function(head) {
  if (!head) return head;

  let reversed = new ListNode(head.val);

  let currentNode = head.next;
  while (currentNode !== null) {
      
      const newHead = currentNode.val;
      const prevHead = reversed;
      reversed = new ListNode(newHead, prevHead);

      currentNode = currentNode.next;
  }

  return reversed;
  
};