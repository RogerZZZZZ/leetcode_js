/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var strLen = s.length;
    var loop = numRows * 2 - 2;
    var firstLine = '',
        midLine = '',
        lastLine = '';

    if(numRows === 1){
        return s;
    }

    if(strLen === null){
        return null;
    }

    //first line solution
    for(var i = 0; i < strLen; i += loop){
        firstLine += s[i];
    }

    //last line solution
    for(var k = numRows - 1; k < strLen; k += loop){
        lastLine += s[k];
    }

    //mid line solution
    for(var j = 1; j < numRows - 1; j++){
        var q = j;
        while(q < strLen){
            midLine += s[q];
            q += loop - j * 2;
            if(q >= strLen){
                break;
            }
            midLine += s[q];
            q += j * 2;
        }
    }
    console.log(firstLine + midLine + lastLine);

    return firstLine + midLine + lastLine;


};
