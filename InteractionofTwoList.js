/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var aLen = 0,
        bLen = 0;
    var tmpA = headA,
        tmpB = headB;
    while(tmpA !== null && tmpA !== undefined){
        aLen++;
        tmpA = tmpA.next;
    }
    while(tmpB !== null && tmpB !== undefined){
        bLen++;
        tmpB = tmpB.next;
    }

    while(aLen > bLen){
        headA = headA.next;
        aLen--;
    }
    while(aLen < bLen){
        headB = headB.next;
        bLen--;
    }

    while(headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};
