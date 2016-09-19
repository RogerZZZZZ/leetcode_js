/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num <= 0) return false;
    if(num === 1) return true;
    var flag1, flag2, flag3;
    while(num % 2 === 0){
        num /= 2;
    }
    while(num % 3 === 0){
        num /= 3;
    }
    while(num % 5 === 0){
        num /= 5;
    }
    if(num === 1) return true;
    return false;
};
