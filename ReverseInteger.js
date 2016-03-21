/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = x + "";
    var returnPara;
    str = str.split("").reverse().join("");
    if(x >= 0){
        returnPara = parseInt(str);
    }else{
        returnPara = -parseInt(str);
    }
    if(returnPara > 2147483648 || returnPara < -2147483648){
        returnPara = 0;
    }

    return returnPara;
};
