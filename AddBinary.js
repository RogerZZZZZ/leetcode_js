/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var aLen = a.length;
    var bLen = b.length;
    var resTmp;
    var carry = 0;
    while(Math.max(aLen, bLen) > 0){
        var aNum = aLen > 0 ? (a[alen---1] - '0') : 0;
        var bNum = bLen > 0 ? (b[bLen---1] - '0') : 0;
        var cNum = aNum + bNum + carry;
        resTmp.push(cNum%2);
        carry = cNum / 2;
    }
    return (carry === 1) ? resTmp.push(1).reverse().join("").toString : resTmp.reverse().join("");
};
