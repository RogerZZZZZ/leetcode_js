/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str === null) return null;
    if(str === '') return 0;

    var num = parseInt(str);

    if(isNaN(num)) return 0;

    if(num >= 2147483648){
        return 2147483647;
    }else if(num <= -2147483648){
        return -2147483648
    }

    return num;

};
