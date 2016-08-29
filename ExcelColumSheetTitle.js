/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if(n === 0){
        return '';
    }
    var first = Math.floor((n-1) / 26);
    var last = (n-1) % 26;

    return convertToTitle(first) + alphabet[last];
};
