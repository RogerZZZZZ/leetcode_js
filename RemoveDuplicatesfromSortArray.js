/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null || head.next === null) return head;
    head.next = deleteDuplicates(head.next);
    return head.val === head.next.val ? head.next : head;
};

//Two Pointers Solution in Java
// public ListNode deleteDuplicates(ListNode head) {
    //     if(head==null || head.next==null) return head;
    //     ListNode p = head;
    //     ListNode curr = p.next;
    //     while(curr!=null) {
    //         if(curr.val!=p.val) {
    //             p.next=curr;
    //             p=curr;
    //         }
    //         curr=curr.next;
    //     }
    //     p.next=curr;
    //     return head;
    // }
