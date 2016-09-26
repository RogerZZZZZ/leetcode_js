/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums === null || nums.length === 0) return [];
    var len = nums.length,
        index = 0;
    for(var i = 0; i < len; i++){
        var a = nums.indexOf(0);
        if(a !== -1){
            index++;
            nums.splice(a, 1);
        }
    }
    var j = 0;
    while(j++ < index){
        nums.push(0);
    }
};
