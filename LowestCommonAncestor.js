/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(p === q) return p;
    var minVal = Math.min(p.val, q.val),
        maxVal = Math.max(p.val, q.val);
    while(root.left !== null || root.right !== null){
        if(minVal <= root.val && maxVal >= root.val){
            return root;
        }else if(minVal < root.val && maxVal < root.val && root.left !== null){
            root = root.left;
        }else if(minVal > root.val && maxVal > root.val && root.right !== null){
            root = root.right;
        }
    }
};
