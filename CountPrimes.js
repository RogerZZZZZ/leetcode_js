/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var isPrimes = [];
    for(var i = 0; i < n; i++){
        isPrimes[i] = true;
    }

    for(var j = 2; j*j < n; j++){
        if(!isPrimes[j]) continue;
        for(var k = j*j; k < n; k+= j){
            isPrimes[k] = false;
        }
    }

    var res = 0;
    for(var q = 2; q < n; q++){
        if(isPrimes[q]) res++;
    }
    return res;
};
