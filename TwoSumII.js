/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var len = numbers.length;
    var startIndex = 0,
        lastIndex = len - 1;
    var res = [];

    while(startIndex < lastIndex){
        if(numbers[startIndex] + numbers[lastIndex] < target){
            startIndex++;
        }else if(numbers[startIndex] + numbers[lastIndex] > target){
            lastIndex--;
        }else{
            res.push(startIndex+1);
            res.push(lastIndex+1);
            return res;
        }
    }
    return res;
};
