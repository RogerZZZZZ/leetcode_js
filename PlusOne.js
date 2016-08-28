/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    if(len === 0 || digits === undefined || digits === null) return null;
    var flag = true;
    var i = len - 1;
    while(flag === true){
        if(digits[i] + 1 < 10){
            digits[i]++;
            flag = false;
            return digits;
        }else{
            if(i === 0){
                digits.splice(0, 0, 1);
                digits[1] = 0;
                return digits;
            }else{
                digits[i] = 0;
                i--;
            }
        }
    }


};
