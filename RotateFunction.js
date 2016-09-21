/**
 * @param {number[]} A
 * @return {number}
 */

var maxRotateFunction = function(A) {
    if(A.length === 0) return 0;
    var len = A.length,
        F = 0,
        sum = 0;
    for(var i = 0; i < len; i++){
        F += i * A[i];
        sum += A[i];
    }

    var max = F;
    for(var j = len - 1; j >= 1; j--){
        F = F + sum - len * A[j];
        max = Math.max(max, F);
    }
    return max;
};

//time limited
// var maxRotateFunction = function(A) {
//     if(A.length === 0) return 0;
//     var len = A.length,
//         max;
//     for(var i = 0; i < len; i++){
//         var num = 0,
//             j = i + 1;
//         for(var index = 0; index < len; index++){
//             if((j + index) % len === 0) continue;
//             num += A[index] * ((j+index) % len);
//         }
//         if(i === 0){
//             max = num;
//         }else{
//             max = max > num ? max : num;
//         }
//     }
//     return max;
// };
