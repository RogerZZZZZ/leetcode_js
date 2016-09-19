/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    var str = n.toString(2);
    return (str.split('1').length - 1) > 1 ? false : true;
};
