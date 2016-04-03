/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length < 3 || nums === null) return null;
    if(nums.length === 3) return nums[0]+nums[1]+nums[2];
    var len = nums.length;
    nums = nums.sort(sortFunction);
    var closestSum = nums[0]+nums[1]+nums[2];
    var diff = Math.abs(nums[0]+nums[1]+nums[2]-target);
    for(var i = 0; i < len; i++){
        var j = i + 1, k = len - 1;
        while(j < k){
            var tem = nums[i] + nums[j] + nums[k];
            if(tem < target){
                j++;
            }else{
                k--;
            }
            if(Math.abs(tem - target) < Math.abs(closestSum - target)){
                closestSum = tem;
            }
        }
    }
    return closestSum;
};

function sortFunction(a, b){
    return a - b;
}
