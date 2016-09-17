/**
 * @param {string} s
 * @return {string}
 */

 var reverseVowels = function(s) {
    var vIndex = {};
    var vowels = {"a":true,"e":true,"i":true,"o":true,"u":true,"A":true,"E":true,"I":true,"O":true,"U":true};
    var reverseV = s.split('');
    reverseV.forEach(function (char, i) {
        if(vowels[char]) {
            vIndex[i] = char;
        }
    });
    if (vIndex.length < 2) return s;
    var keys = Object.keys(vIndex);
    var len = Math.floor(keys.length);
    for(var i = 0; i < len; i++) {
        reverseV[keys[i]] = vIndex[keys[len - 1 - i]];
        reverseV[keys[len - 1 - i]] = vIndex[keys[i]];
    }
    return reverseV.join('');
};
// var reverseVowels = function(s) {
//     var i = 0,
//         j = s.length - 1;
//     var vowels = 'aeiouAEIOU';
//
//     while(i < j){
//         while(i < j && vowels.indexOf(s[i]) === -1){
//             i++;
//         }
//         while(i < j && vowels.indexOf(s[j]) === -1){
//             j--;
//         }
//
//         if(j === s.length - 1 && i < j){
//             s = s.substring(0, i) + s[j] + s.substring(i+1, j) + s[i];
//         }else if(j !== s.length - 1 && i < j){
//             s = s.substring(0, i) + s[j] + s.substring(i+1, j) + s[i] + s.substring(j+1, s.length);
//         }
//         i++;
//         j--;
//     }
//     return s;
// };
