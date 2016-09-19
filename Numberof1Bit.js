/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if(n === undefined || n === null) return null;
    var str = n.toString(2);
    var count = 0;
    var index = 0;
    while(index < str.length){
        if(str[index] === '1') count++;
        index++;
    }
    return count;
};
