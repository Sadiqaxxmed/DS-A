/***********************************************************************************************************
 
    ~ REVERSE LINKED LIST (EASY) ~

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

***********************************************************************************************************/


var reverseList = function(head) {
    // Set up our pointers: prev will track the previous node, curr will track the current node
    let prev = null;
    let curr = head;

    // Iterates through the LinkedList until curr becomes null (end of the list)
    while (curr) {
        // Store the next node in the list to avoid losing the reference
        let next = curr.next;
        
        // Reverse the LinkedList pointers: point the current node's next to the previous node
        curr.next = prev;
        
        // Move prev and curr pointers forward for the next iteration
        prev = curr;
        curr = next;
    }

    // 'prev' now points to the new head of the reversed LinkedList
    return prev;
};
