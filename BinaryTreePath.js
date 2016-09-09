/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var res = [];
    if(root !== null) searchBT(root, "", res);
    return res;
};

function searchBT(node, path, res){
    if (node.left === null && node.right === null) res.push(path + node.val);
    if (node.left !== null) searchBT(node.left, path + node.val + "->", res);
    if (node.right !== null) searchBT(node.right, path + node.val + "->", res);
}
