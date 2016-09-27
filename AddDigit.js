/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return Math.floor((num - 1) % 9) + 1;
};
