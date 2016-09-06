/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null || head === undefined) return null;
    var tmp = new ListNode(),
        res = new ListNode();
    tmp.next = head;
    res = tmp;
    while(tmp !== null && tmp !== undefined && tmp.next !== null && tmp.next !== undefined){
        if(val === tmp.next.val){
            tmp.next = tmp.next.next;
        }else{
            tmp = tmp.next;
        }
    }
    return res.next;
};
