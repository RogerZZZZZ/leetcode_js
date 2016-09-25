/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null || q === null){
        if(p === q) return true;
        return false;
    }
    var res1 = true,
        res2 = true;
    if(p.val !== q.val) res1 = res2 = false;
    if(p.left !== null && q.left !== null){
        res1 = isSameTree(p.left, q.left);
    }else if(p.left === null && q.left === null){

    }else{
        res1 = false;
    }
    if(p.right !== null && q.right !== null){
        res2 = isSameTree(p.right, q.right);
    }else if(p.right === null && q.right === null){

    }else{
        res2 = false;
    }
    return res1 && res2;
};
