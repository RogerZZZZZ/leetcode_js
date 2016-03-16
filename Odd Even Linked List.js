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
var oddEvenList = function(head) {
  var oddArray = new Array();
  var evenArray = new Array();
  if(head === null) return false;
  for(var i = 0; i < head.length; i++){
    if(i % 2 !== 0){
      oddArray.push(head[i]);
    }else{
      evenArray.push(head[i]);
    }
  }

  return evenArray.concat(oddArray);
};
