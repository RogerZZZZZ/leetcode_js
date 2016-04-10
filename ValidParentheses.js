/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var charStack = [];
    for (var x = 0; x < s.length; x++) {
        switch(s.charAt(x)) {
            case '(':
            case '[':
            case '{':
                charStack.push(s.charAt(x));
                break;
            case ')':
                if (charStack[charStack.length -1] === '(') {
                    charStack.pop();
                } else {
                    return false;
                }
                break;
            case '}':
                if (charStack[charStack.length -1] === '{') {
                    charStack.pop();
                } else {
                    return false;
                }
                break;
            case ']':
            if (charStack[charStack.length -1] === '[') {
                    charStack.pop();
                } else {
                    return false;
                }
                break;
        }
    }
    return charStack.length === 0;
};
