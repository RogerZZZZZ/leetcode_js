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
var swapPairs = function(head) {
    var resultNode = head;
    var tmpVaule = 0;
    while(resultNode !== null && resultNode.next !== null){
        tmpVaule = resultNode.val;
        resultNode.val = resultNode.next.val;
        resultNode.next.val = tmpVaule;
        resultNode = resultNode.next.next;
    }
    return head;
};
