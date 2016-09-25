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
var reverseList = function(head) {
    if(head === null) return head;
    var res,
        index = 0;
    while(head !== null){
        var tmp;
        if(index === 0){
            res = new ListNode(head.val);
            index++;
        }else{
            tmp = new ListNode(head.val);
            tmp.next = res;
            res = tmp;
        }

        head = head.next;
    }
    return res;
};
