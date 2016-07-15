/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(nums1 === null || nums1.length === 0 || m === 0){
        nums1 = nums2;
    }

    for(var i = m + n - 1; i > 0; i--){
        if(m > 0 && n > 0){
            if(nums2[n - 1] > nums1[m - 1]){
                nums1[i] = nums2[n - 1];
                n--;
            }else{
                nums1[i] = nums1[m -1];
                m--;
            }
        }else if(m > 0){
            nums1[m] = nums1[m - 1];
            m--;
        }else if(n > 0){
            nums1[m] = nums2[n - 1];
            n--;
        }
    }
};

//比较low的排序
//
// var merge = function(nums1, m, nums2, n) {
//     while(n){
//         nums1[m++]=nums2[--n];
//     }
//     nums1.sort(function(val1, val2){
//         return val1>val2?1:val1<val2?-1:0;
//     })
// };

// var merge = function(nums1, m, nums2, n) {
//     if(nums1 === null || nums1.length === 0) return nums2;
//     if(nums2 === null || nums2.length === 0) return nums1;
//     var index = 0, indexA = 0, indexB = 0;
//     var arrayResult = [];
//     var totalNum = m + n;
//     while(index < totalNum){
//         if(nums1[indexA] <= nums2[indexB] && indexA < m){
//             arrayResult[index] = nums1[indexA];
//             indexA++;
//         }else if(nums2[indexB] < nums1[indexA] && indexB < n){
//             arrayResult[index] = nums2[indexB];
//             indexB++;
//         }else if(indexA >= m){
//             arrayResult[index] = nums2[indexB];
//             indexB++;
//         }else if(indexB >= n){
//             arrayResult[index] = nums1[indexA];
//             indexA++;
//         }
//         index++;
//     }
//     nums1 = arrayResult;
// };
