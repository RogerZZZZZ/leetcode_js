/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k === 0) return false;
    for(var i = 0; i < nums.length - 1; i++){
        for(var j = i + 1; j < nums.length && j < i + k + 1; j++){
            if(nums[i] === nums[j]) return true;
        }
    }
    return false;
};


// public boolean containsNearbyDuplicate(int[] nums, int k) {
//         Set<Integer> set = new HashSet<Integer>();
//         for(int i = 0; i < nums.length; i++){
//             if(i > k) set.remove(nums[i-k-1]);
//             if(!set.add(nums[i])) return true;
//         }
//         return false;
//  }
