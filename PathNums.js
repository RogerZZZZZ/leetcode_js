/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root === null) return false;
    var bool1 = false, bool2 = false;
    if(root.left === null && root.right === null && root.val === sum) return true;
    if(root.left !== null){
        root.left.val += root.val;
        bool1 = hasPathSum(root.left, sum);
    }
    if(root.right !== null){
        root.right.val += root.val;
        bool2 = hasPathSum(root.right, sum);
    }
    return bool1 || bool2;
}
