/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var len = 1;
    var count = 9;
    var start = 1;
    while(n > len * count){
        n -= len * count;
        len += 1;
        count *= 10;
        start *= 10;
    }
    start += (n - 1) / len;
    var res = start + "",
        index = (n - 1) % len;
    return parseInt(res[index]);
};
