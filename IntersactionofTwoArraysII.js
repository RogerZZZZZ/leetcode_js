/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length <= 0 || nums2.length <= 0) return [];
    nums1.sort(sortHelp);
    nums2.sort(sortHelp);
    var res = [];
    var index1 = 0,
        index2 = 0;
    while(index1 < nums1.length && index2 < nums2.length){
        if(nums1[index1] === nums2[index2]){
            if(res.indexOf(nums1[index1]) === -1){
                res.push(nums1[index1]);
            }
            index1++;
            index2++;
        }else if(nums1[index1] < nums2[index2]){
            index1++;
        }else{
            index2++;
        }
    }
    var result = [];
    for(var j = 0; j < res.length; j++){
        result[j] = parseInt(res[j]);
    }
    return result;
};

function sortHelp(a, b){
    return a - b;
}
