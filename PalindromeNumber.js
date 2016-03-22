/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x === null) return false;
    x += '';
    var len = x.length;
    if(len == 1) return true;
    var i = 0, j = len - 1;
    while(i < j){
        if(x[i++] !== x[j--]) return false;
    }
    return true;

};
