/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s === null || s === undefined) return null;
    var len = s.length;
    if(len === 1) return 0;
    var tmp1 = [],
        tmp2 = [];
    for(var i = 0; i < len; i++){
        if(tmp1.indexOf(s[i]) === -1){
            tmp1.push(s[i]);
        }else if(tmp2.indexOf(s[i]) === -1){
            tmp2.push(s[i]);
        }
    }
    for(var j = 0; j < tmp1.length; j++){
        if(tmp2.indexOf(tmp1[j]) === -1){
            return s.indexOf(tmp1[j]);
        }
    }
    return -1;
};


// var firstUniqChar = function(s) {
//     if(s === null || s === undefined) return null;
//     var hashmap = new HashMap(),
//         res;
//     var len = s.length;
//     if(len === 1) return 0;
//     for(var i = 0; i < len; i++){
//         if(hashmap.existValue(s[i])){
//             hashmap.changeValue(s[i]);
//         }else{
//             hashmap.put(i, s[i]);
//         }
//     }
//     res = hashmap.findUnique();
//     return parseInt(res);
// };

// function HashMap(){
//     //定义长度
//     var length = 0;
//     //创建一个对象
//     var obj = {};
//
//     /**
//     * 判断对象中是否包含给定Key
//     */
//     this.containsKey=function(key){
//         return (key in obj);
//     };
//
//     /**
//     * 判断对象中是否包含给定的Value
//     */
//     this.existValue=function(value){
//         for(var key in obj){
//             if(obj[key].indexOf(value) !== -1){
//                 return true;
//             }
//         }
//         return false;
//     };
//
//     /**
//     * 改变某位置的数值
//     */
//     this.changeValue=function(value){
//         for(var key in obj){
//             if(obj[key] === value){
//                 obj[key] += value;
//             }
//         }
//     };
//
//     /**
//     * leetcode 寻找第一个value长度大于1的位置
//     */
//     this.findUnique=function(){
//         for(var key in obj){
//             if(obj[key].length === 1){
//                 return key;
//             }
//         }
//         return -1;
//     };
//
//     /**
//     *向map中添加数据
//     */
//     this.put=function(key,value){
//         if(!this.containsKey(key)){
//             length++;
//         }
//         obj[key] = value;
//     };
// }
