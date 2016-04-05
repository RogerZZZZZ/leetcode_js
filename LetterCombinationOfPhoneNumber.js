/**
 * @param {string} digits
 * @return {string[]}
 */
 var result = [];
 var index = 0;
 var map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

 var letterCombinations = function(digits) {
     if(digits === null || digits.length === 0) return [];
     var s = "";
     DFS(digits, result, s, 0);
     //global param result 每次运行前需要进行清空
     var tmp = result;
     result = [];
     return tmp;
 };

 function DFS(digits, result, s, start){
     if(start === digits.length){
         result[index] = s;
         index++;
     }else{
         var tmp = map[parseInt(digits[start])];
         for(var i = 0; i < tmp.length; i++){
             s += tmp[i];
             DFS(digits, result, s, start + 1, map);
             s = s.substring(0, s.length-1);
         }
     }
 }
