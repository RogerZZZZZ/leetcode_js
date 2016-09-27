/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root === null || (root.left === null && root.right === null)) return 0;
    var l = 0,
        r = 0;
    if(root.left !== null) l = (root.left.left === null && root.left.right === null) ? root.left.val : sumOfLeftLeaves(root.left);
    if(root.right !== null) r = sumOfLeftLeaves(root.right);
    return l + r;
};
