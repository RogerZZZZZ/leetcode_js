/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if(nums.length < 2) return null;
  var returnArr = [];
  for(var i = 0; i < nums.length - 1; i++){
    for(var j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] == target){
        returnArr.push(i);
        returnArr.push(j);
        return returnArr;
      }
    }
  }
  return null;
};
