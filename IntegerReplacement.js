/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    var dept = 1;
    if(n === 1) return 0;

    if(n % 2 === 0){
        dept = integerReplacement(n/2);
    }else{
        var tmp1 = integerReplacement(n+1);
        var tmp2 = integerReplacement(n-1);
        dept = Math.min(tmp1, tmp2);
    }
    return dept + 1;
};
