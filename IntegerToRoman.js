/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var romanDigit = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var value = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var rst = '';
    for(var i = 0; i < value.length; i++){
        while(num >= value[i]){
            num -= value[i];
            rst += romanDigit[i];
        }
    }
    return rst;
};
