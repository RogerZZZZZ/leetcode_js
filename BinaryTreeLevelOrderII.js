/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var res = [];
    if(root !== null){
        res.push([root.val]);
        searchBT(root, 1, res);
    }
    return res.reverse();
};

function searchBT(node, floor, res){
    if (node.left === null && node.right === null) return;
    if(res[floor] === null || res[floor] === undefined){
        res[floor] = [];
    }
    if (node.left !== null && node.left !== undefined){
        res[floor].push(node.left.val);
        searchBT(node.left, floor + 1, res);
    }
    if (node.right !== null && node.right !== undefined){
        res[floor].push(node.right.val);
        searchBT(node.right, floor + 1, res);
    }
}
