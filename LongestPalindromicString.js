/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var rs = 0, re = 0, max = 0;
    var len = s.length;
    for(var i = 0; i < len; i++){
        if(isPalidrome(s, i - max - 1, i)){
            rs = i - max - 1;
            re = i;
            max += 2;
        }else if(isPalidrome(s, i - max, i)){
            rs = i - max;
            re = i;
            max += 1;
        }
    }

    return s.substring(rs, re + 1);
};


function isPalidrome(char, s, e){
    if(s < 0) return false;
    while(s < e){
        if(char[s++] != char[e--]) return false;
    }

    return true;
}
