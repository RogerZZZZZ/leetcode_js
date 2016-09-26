/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;
    if(ransomNote.length === 0) return true;
    var ranLen = ransomNote.length,
        magazineLen = magazine.length;
    for(var i = 0; i < ranLen; i++){
        if(magazine.indexOf(ransomNote[i]) !== -1){
            magazine = magazine.replace(ransomNote[i], '');
        }else{
            return false;
        }
    }
    return true;
};
