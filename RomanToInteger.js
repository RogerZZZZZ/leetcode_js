/**
 * @param {string} s
 * @return {number}
 */
var romObj = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
var romanToInt = function(s) {
    var sum = 0;
    var len = s.length;
    for(var i = 0; i < len; i++){
        var tem1 = romObj[s.substring(i, i+1)];
        var tem2 = romObj[s.substring(i+1, i+2)];
        if(s.substring(i+1, i+2) !== null && tem1 < tem2){
            sum += tem2 - tem1;
            i++;
        }else{
            sum += tem1;
        }
    }

    return sum;
};

//使用HashMap
