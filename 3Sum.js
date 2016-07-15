/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var len = nums.length;
    var index = 0;
    var resultArray = [];
    if(nums.length < 3 || nums === null) return resultArray;
    nums.sort(sortFunction);
    for(var i = 0; i < len; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        var target = -nums[i];
        var j = i + 1, k = len - 1;
        while(j < k){
            if(nums[j] + nums[k] === target){
                resultArray[index] = [nums[i], nums[j], nums[k]];
                index++;
                while(j < k && nums[j] === nums[j + 1]) j++;
                while(j < k && nums[k] === nums[k + 1]) k++;
                j++;k--;
            }else if(nums[j] + nums[k] < target){
                j++;
            }else{
                k--;
            }
        }
    }
    return resultArray;

};

function sortFunction(a, b){
    return a - b;
}
