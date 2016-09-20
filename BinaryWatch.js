/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var res = [];
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    dfs(arr, 0, 0, res, num);
    return res;
};

function dfs(arr, i, k, res, num){
    if(k === num){
        var tmp = getTime(arr);
        if(tmp !== null){
            res.push(tmp);
        }
        return;
    }
    if(i === arr.length){
        return;
    }
    arr[i] = 0;
    dfs(arr, i+1, k, res, num);

    arr[i] = 1;
    dfs(arr, i+1, k+1, res, num);

    arr[i] = 0;
}

function getTime(arr){
    var hours = 0;
    for(var i = 0; i < 4; i++){
        if(arr[i] === 1){
            hours += Math.pow(2, i);
        }
    }

    var minutes = 0;
    for(var j = 4; j < 10; j++){
        if(arr[j] === 1){
            minutes += Math.pow(2, j-4);
        }
    }

    var min = "" + minutes;
    if(minutes < 10) min = "0" + min;
    var result = hours + ":" + min;
    if(hours >= 12 || minutes >= 60) return null;
    return result;
}
