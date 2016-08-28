/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    var i = 0;
    var tmp;
    while(i++ < k){
        tmp = nums.pop();
        nums.unshift(tmp);
    }
};
