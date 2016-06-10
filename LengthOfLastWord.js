/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s === "" || s === null) return 0;
    while(s[s.length - 1] === " "){
        s = s.substring(0, s.length-1);
    }
    s = s.split("").reverse().join("");
    var resultCount = 0;
    while(resultCount < s.length){
        if(s[resultCount] != " "){
            resultCount ++;
        }else{
            return resultCount;
        }
    }
    return resultCount;
};
