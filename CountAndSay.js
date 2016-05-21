/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var resultStr = "1";
    while(--n > 0){
        resultStr = say(resultStr);
    }
    return resultStr;
};

function say(str){
    var resultStr = "";
    for(var i = 0, count = 0; i < str.length;){
        while(i + count < str.length && str[i] == str[i+count]){
            count++;
        }
        resultStr += count + str[i];
        i += count;
        count = 0;
    }
    return resultStr;
}
