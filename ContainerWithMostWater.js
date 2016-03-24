/**
 * @param {number[]} height
 * @return {number}
 */

 var maxArea = function(height) {
     var len = height.length;
     var lo = 0, hi = len - 1;
     var max = 0, tmpMax;
     while(lo < hi){
        var loMax = height[lo];
        var hiMax = height[hi];
        tmpMax = (hi - lo) * (loMax > hiMax ? hiMax : loMax);
        max = tmpMax > max ? tmpMax : max;

        if(height[lo] <= height[hi]){
            while(lo < hi && height[lo] <= loMax) ++lo;
        }else{
            while(hi > lo && height[hi] <= hiMax) --hi;
        }
     }
     return max;
 };
// var maxArea = function(height) {
//     if(height === null || height.length <= 1) return null;
//     var len = height.length;
//     var w, h, maxContainer = 0, temContainer;
//     for(var i = 0; i < len; i++){
//         for(var j = i + 1; j < len; j++){
//             w = j - i;
//             h = height[i] > height[j] ? height[j] : height[i];
//             temContainer = w * h;
//             maxContainer = maxContainer > temContainer ? maxContainer : temContainer;
//         }
//     }
//     return maxContainer;
//
// };


/*
This is a classic problem that is solved by using two-pointer technique. The problem states as follows: Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water. You may not slant the container.

To start with, we use two pointers to point at the left and right boundary of the container, one at leftmost index and the other at rightmost index as an initial step, respectively. The strategy is keep moving two pointers (boundaries) closer to each other until they meet. During the moving procedure, we keep calculating the container size. The trick here is how to move the two pointers so that we can do it in one pass and more over skip as many indices as possible.

Suppose we have the following height array and the left and right pointers are at `lo` and `hi`, respectively.

                              |    ***         |
               |              |    ***         |
               |    |    |    |    ***    |    |
          |    |    |    |    |    ***    |    |
          |    |    |    |    |    ***    |    |              |
     |    |    |    |    |    |    ***    |    |              |
     |    |    |    |    |    |    ***    |    |              |    |
     |    |    |    |    |    |    ***    |    |    |         |    |
     |    |    |    |    |    |    ***    |    |    |    |    |    |
    lo                                              @              hi

We first compute the container size with `(lo, hi)` pair and update the final `max` size if the computed result is greater than current `max`.

Also, in this scenario, `height[lo] > height[hi]`, we claim the following important fact:

 - when `height[lo] > height[hi]`, if `hi` is the right line that forms the largest container, all lines to the right of `lo` cannot be the left line of the largest container.

This is actually quite easy to show, since

    size = height[hi] * (hi-lo),
if `lo` increases, `size` will reduce for sure. This fact is critical, because we can skip all other indices for `lo` under this particular `hi` and safely move `hi` to `hi-1` and continue.

When `hi` moves left a step, we notice that `height[lo] < height[hi]`. Similar as above, we can safely skip all indices to the left of `hi` under this particular `lo`. That is, we can move `lo` to `lo+1` and continue.

However, this is not the most optimized solution yet.

Suppose `hi` moves to `@` as indicated in the above figure, we notice that its value is greater than its right neighbor, so we will not skip that one according to the above analysis. But do we really need to consider `@` as a candidate?

The answer is no. Because `@` has a value no greater than `hi` in the above figure. So `@` cannot be the right index of the largest container. (If it is, why don't we choose `hi` and get a larger container?) Therefore, to further optimize the algorithm, I store two local variables `loMax` and `hiMax`, that is the max value of all items to `lo`'s left and `hi`'s right, respectively. We can then skip `@` because `height[@] <= hiMax`.
*/
