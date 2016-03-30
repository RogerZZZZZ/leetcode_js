/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0 || strs === null) return "";
    var arrLen = strs.length;
    var prefix = "";
    var prefixLen = strs[0].length;
    for(var i = 0; i < arrLen; i++){
        if(strs[i].length < prefixLen) prefixLen = strs[i].length;
    }

    for(var j = 0; j < prefixLen; j++){
        var temp = strs[0][j];
        for(var k = 0; k < arrLen; k++){
            if(temp !== strs[k][j]) return prefix;
        }
        prefix += temp;
    }


    return prefix;
};
