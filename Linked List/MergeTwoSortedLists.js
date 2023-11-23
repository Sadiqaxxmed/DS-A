/********************************************************************************************************************************
 
    ~ Merge Two Sorted Lists (EASY) ~

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

********************************************************************************************************************************/


var mergeTwoLists = function(list1, list2) {
    // Initialize a new ListNode to store the merged list
    let ans = new ListNode();
    // Create a pointer to traverse and build the merged list
    let ptr = ans;

    // Iterate through both lists while comparing elements
    while(list1 && list2){
        // If the value in list1 is smaller or equal to list2's value
        if(list1.val <= list2.val){
            // Create a new node in the merged list with list1's value
            ans.next = new ListNode(list1.val);
            // Move to the next node in list1
            list1 = list1.next;
        }
        else{
            // Create a new node in the merged list with list2's value
            ans.next = new ListNode(list2.val);
            // Move to the next node in list2
            list2 = list2.next;
        }
        // Move to the next node in the merged list
        ans = ans.next;
    }

    // If there are remaining elements in list1, add them to the merged list
    while(list1){
        ans.next = new ListNode(list1.val);
        list1 = list1.next;
        ans = ans.next;
    }

    // If there are remaining elements in list2, add them to the merged list
    while(list2){
        ans.next = new ListNode(list2.val);
        list2 = list2.next;
        ans = ans.next;
    }

    // Return the merged list starting from the second node (first node was initialized as empty)
    return ptr.next;
};
