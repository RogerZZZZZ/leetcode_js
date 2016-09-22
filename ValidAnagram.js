/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    for(var i = 0; i < t.length; i++){
        if(s.indexOf(t[i]) !== -1){
            var index = s.indexOf(t[i]);
            s = s.replace(t[i], '');
        }
    }
    if(s.length === 0) return true;
    return false;
};
