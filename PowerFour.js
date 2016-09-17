/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    // console.log(num);
    var str = num.toString(2);
    if((str.split('1').length - 1) > 1) return false;
    while(str.length % 4 !== 0){
        str = '0' + str;
    }
    var len = str.length;
    var tmp = str.split('1');
    if(tmp[0] !== '0' && tmp[0] !== '000') return false;
    return true;
};
