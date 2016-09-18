/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var max2 = parseInt(n/2);
    var steps = 0;
    for(var i = 0; i <= max2; i++){
        var total1 = n - 2*i;
        var index = 1,
            tmp = (total1 + i),
            divideVal = factorial(total1) === 0 ? 1 : factorial(total1);
        var to = tmp;
        while(index < total1 && total1 !== n){
            to *= (tmp - index);
            index++;
        }
        if(total1 === n || n === i * 2){
            steps += 1;
        }else{
            steps += to/divideVal;
        }
    }
    return steps;
};

function factorial(n){
    return n > 1 ? n * factorial(n-1) : 1;
}
