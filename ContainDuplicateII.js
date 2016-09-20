/**
 * No.217
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums === null || nums === undefined) return null;
    if(nums.length <= 1) return false;
    nums = nums.sort(sortHelper);
    var len = nums.length;
    var i = 1;
    while(i < len){
        if(nums[i] === nums[i-1]) return true;
        i++;
    }
    return false;
};

function sortHelper(a, b){
    return a - b;
}
