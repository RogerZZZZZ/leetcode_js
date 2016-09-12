/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var deg = 5;
    var div = Math.floor(n/deg);
    var result = div;
    while(div > 1){
        deg *= 5;
        div = Math.floor(n/deg);
        result += div;
    }
    return result;
};
