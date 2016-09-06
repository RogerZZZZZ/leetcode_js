/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var tmpStr = [];
    if(head === null || head === undefined) return true;
    while(head !== null && head !== undefined){
        tmpStr.push(head.val);
        head = head.next;
    }
    if(tmpStr.length === 0 || tmpStr.length === 1) return true;
    var i = 0, j = tmpStr.length - 1;
    while(i < j){
        if(tmpStr[i++] !== tmpStr[j--]) return false;
    }
    return true;
};
