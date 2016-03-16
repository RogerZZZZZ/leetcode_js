var arr = [1,3,2,4,5];

var increasingArray  = function(nums){
  var small = nums[0];
  var mid = Number.MAX_VALUE;

  for(var i = 1; i < nums.length; i++){
    if(nums.length < 3 || nums === null) return false;

    if(nums[i] > small && nums[i] < mid) mid = nums[i];

    if(nums[i] < small) small = nums[i];

    if(nums[i] > mid) return true;
  }

  return false;
};
