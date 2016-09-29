/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var res = [];
    for(var j = 0; j <= num; j++) res[j] = 0;
    for(var i = 1; i <= num; i++){
        res[i] = res[i >> 1] + (i & 1);
    }
    return res;
};
