/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    var listNode = l1;

    l1.val += l2.val;

    while(l1.next !== null && l2.next !== null){
        if(l1.val > 9){
            l1.val = l1.val % 10;
            l1.next.val ++;
        }
        l1.next.val += l2.next.val;

        l1 = l1.next;
        l2 = l2.next;
    }

    if(l2.next !== null){
        l1.next = l2.next;
    }

    while(l1.val > 9){
        l1.val %= 10;
        if(l1.next === null){
            l1.next = new ListNode(1);
        }else{
            l1.next.val ++;
            l1 = l1.next;
        }
    }

    return listNode;
};
