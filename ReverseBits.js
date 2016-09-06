/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = n.toString(2);
    res = res.split("").reverse().join("");
    for(var i = res.length; i < 32; i++){
        res += '0';
    }
    return parseInt(res, 2);
};
