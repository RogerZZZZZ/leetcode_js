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
var isSymmetric = function(root) {
    var res = [];
    if(root !== null && root !== undefined){
        res.push([root.val]);
        getPath(root, 1, res);
    }else{
        return true;
    }
    var treeLen = res.length;
    var i = 0;
    while(i < treeLen){
        if(!isPalindrome(res[i])) return false;
        i++;
    }
    return true;
};

function isPalindrome(arr){
    var i = 0, j = arr.length - 1;
    while(i < j){
        if(arr[i++] !== arr[j--]) return false;
    }
    return true;
}

function getPath(node, floor, res){
    if(res[floor] === null || res[floor] === undefined){
        res[floor] = [];
    }
    if (node.left === null && node.right === null){
        res[floor].push("null");
        res[floor].push("null");
        return;
    }
    if (node.left !== null && node.left !== undefined){
        res[floor].push(node.left.val);
        getPath(node.left, floor + 1, res);
        if(node.right === null || node.right === undefined){
            res[floor].push("null");
        }
    }
    if (node.right !== null && node.right !== undefined){
        if(node.left === null || node.left === undefined){
            res[floor].push("null");
        }
        res[floor].push(node.right.val);
        getPath(node.right, floor + 1, res);
    }
}
