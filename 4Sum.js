/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var resultArray = [];
    var index = 0;
    var len = nums.length;
    if(len < 4 || nums === null) return resultArray;
    nums.sort(sortFunction);

    for(var i = 0; i < len; i++){
        if(nums[i] === nums[i - 1] && i > 0) continue;
        for(var j = i + 1; j < len; j++){
            if(nums[j] === nums[j - 1] && j > i + 1) continue;
            var tmp = target - (nums[i] + nums[j]);
            var k = j + 1, p = len - 1;
            while(k < p){
                if(nums[k] + nums[p] === tmp){
                    resultArray[index] = [nums[i], nums[j], nums[k], nums[p]];
                    index++;
                    while(k < p && nums[k] === nums[k + 1]) k++;
                    while(k < p && nums[p] === nums[p + 1]) p++;
                    k++;p--;
                }else if(nums[k] + nums[p] < tmp){
                    k++;
                }else{
                    p--;
                }
            }
        }
    }
    return resultArray;
};

function sortFunction(a, b){
    return a - b;
}
