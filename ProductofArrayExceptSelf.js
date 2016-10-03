/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    if(len <= 1) return nums;
    var productSum = 1;
    var res = [];
    for(var i = 0 ; i < nums.length ; i++){
        res[i] = productSum;
        productSum *= nums[i];
    }
    productSum = 1;
    for(var j = nums.length - 1 ; j >= 0 ; j--){
        res[j] *= productSum;
        productSum *= nums[j];
    }
    return res;
};
