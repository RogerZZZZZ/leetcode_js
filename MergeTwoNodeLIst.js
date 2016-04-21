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
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    var resultNodeList = new ListNode();
    var tmp = resultNodeList;
    if(l1.val < l2.val){
        tmp = l1;
        l1 = l1.next;
    }else{
        tmp = l2;
        l2 = l2.next;
    }
    resultNodeList.next = tmp;
    while(l1 !== null){
        if(l2 === null) {
            tmp.next = l1;
            tmp = tmp.next;
            return resultNodeList.next;
        }
        if(l1.val < l2.val){
            tmp.next = l1;
            tmp = tmp.next;
            l1 = l1.next;
        }else{
            tmp.next = l2;
            tmp = tmp.next;
            l2 = l2.next;
        }
    }
    if(l2 !== null){
        tmp.next = l2;
    }
    return resultNodeList.next;
};
