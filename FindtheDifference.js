/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sLen = s.length;
    for(var i = 0; i < sLen; i++){
        if(t.indexOf(s[i]) !== -1){
            t = t.replace(s[i], '');
        }
    }
    return t[0];
};
