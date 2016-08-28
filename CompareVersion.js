/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let ver1Arr = version1.split(".").map(function(x) {return Number(x);});
    let ver2Arr = version2.split(".").map(function(x) {return Number(x);});

    let highestLevel = 0;
    if(ver1Arr.length > ver2Arr.length) highestLevel = ver1Arr.length;
    else highestLevel = ver2Arr.length;

    let level = 0;
    while(level < highestLevel) {
        if(ver1Arr[level] === undefined && ver2Arr[level] !== 0) return -1;
        if(ver2Arr[level] === undefined && ver1Arr[level] !== 0) return 1;

        if(ver1Arr[level] < ver2Arr[level]) return -1;
        if(ver1Arr[level] > ver2Arr[level]) return 1;

        level++;
    }
    return 0;
};
