/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s === null || s === undefined) return undefined;
    s = s.replace(/[^A-Za-z0-9]+/ig, "");
    s = s.toLowerCase();
    var len = s.length;
    if(len === 0) return true;
    var i = 0, j = len - 1;
    while(i < j){
        if(s[i++] !== s[j--]) return false;
    }
    return true;
};
