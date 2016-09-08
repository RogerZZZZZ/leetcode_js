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
var minDepth = function(root) {
    if(root === null) return 0;

    var depth = 0;
    if(root.left !== null && root.right !== null){
        var left = minDepth(root.left);
        var right = minDepth(root.right);
        depth = Math.min(left, right);
    }else if(root.left !== null){
        depth = minDepth(root.left);
    }else if(root.right !== null){
        depth = minDepth(root.right);
    }
    return depth + 1;
};
