/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var numsLen = nums.length;
    var tmpNum;
    if(numsLen === 0) return 0;
    tmpNum = nums[0];
    var i = 0, j = 0;
    for(; i < numsLen; i++){
    	if(nums[i] !== nums[j]) nums[++j] = nums[i]
    }
    return ++j;
};
