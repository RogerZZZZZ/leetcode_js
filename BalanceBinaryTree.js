/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null || root === undefined) return true;
    var res = searchBalance(root);
    return res > 0 ? true : false;
};

function searchBalance(root){
    if(root === null || root === undefined) return 0;
    var left = searchBalance(root.left);
    var right = searchBalance(root.right);
    if(left === -1 || right === -1 || Math.abs(left-right) > 1) return -1;
    return Math.max(left, right) + 1;
}
