/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n <= 0) return undefined;

        if(isBadVersion(1)){
            return 1;
        }else if(!isBadVersion(n)){
            return null;
        }
        var left = 1, right = n;

        while(1){
            mid = left + Math.floor((right - left) /2);
            if(left === mid){
                return right;
            }

            if(isBadVersion(mid)){
                right = mid;
            }else{
                left = mid;
            }
        }
    };
};
