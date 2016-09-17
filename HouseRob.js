/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var ifRobPrevious = 0,
        ifNotRobPrevious = 0;
    for(var i = 0; i < nums.length; i++){
        var cifRobPrevious = ifNotRobPrevious + nums[i];
        var cifNotRobPrevious = Math.max(ifNotRobPrevious, ifRobPrevious);

        ifRobPrevious = cifRobPrevious;
        ifNotRobPrevious = cifNotRobPrevious;
    }
    return Math.max(ifRobPrevious, ifNotRobPrevious);
};
