/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums){
    var major = nums[0],
        count = 1;
    for(var i = 1; i < nums.length; i++){
        if(count === 0){
            count++;
            major = nums[i];
        }else if(major === nums[i]){
            count++;
        }else{
            count--;
        }
    }
    return major;
}

// var majorityElement = function(nums) {
//     if(nums.length === 1) return nums[0];
//     nums = nums.sort(sortHelper);
//     var len = nums.length;
//     for(var i = 0; i < len; i++){
//         var start = nums.indexOf(nums[i]);
//         var end = nums.lastIndexOf(nums[i]);
//         if((end - start) >= Math.floor(len/2)) return nums[i];
//     }
//     return null;
// };
//
// function sortHelper(a, b){
//     return a - b;
// }
