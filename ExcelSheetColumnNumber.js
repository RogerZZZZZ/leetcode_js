/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var len = s.length;
    if(len <= 0) return '';
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var res = 0;
    for(var i = 0; i < len; i++){
        var index = alphabet.indexOf(s[i]) + 1;
        res += Math.pow(26, (len-i-1))*index;
    }
    return res;
};
