/**
 * @param {number} n
 * @return {string[]}
 */
var resultArray = [];

var generateParenthesis = function(n) {
    backtrack("", 0, 0, n);
    return resultArray;
};

function backtrack(str, open, close, max){
    if(str.length === max*2){
        resultArray.push(str);
        return;
    }

    if(open < max) backtrack(str + "(", open + 1, close, max);
    if(close < open) backtrack(str + ")", open, close + 1, max);
}
