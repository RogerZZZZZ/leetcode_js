/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    if(people.length <= 1) return people;
    var res = [];
    people.sort(sortHelper);
    res = findMax(people);
    people.splice(people.length-res.length, res.length);
    for(var i = people.length - 1; i >= 0; i--){
        res.splice(people[i][1], 0, people[i]);
    }
    return res;
};

function sortHelper(a,b){
    return a[0] !== b[0] ? a[0]-b[0] : -a[1]+b[1];
}

function findMax(arr){
    var res = [],
        index = arr.length - 1;
    max = arr[index][0];
    res.push(arr[index]);
    index--;
    while(arr[index][0] === max){
        res.push(arr[index]);
        index--;
    }
    return res;
}
