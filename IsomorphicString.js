/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    var i = 0;
    var indexA = 0, indexB = 0;
    var hashA = new HashMap(), hashB = new HashMap();
    var tmpA = '', tmpB = '';
    while(i < s.length){
        if(!hashA.containsKey(s[i])){
            hashA.put(s[i], indexA);
            tmpA += indexA;
            indexA++;
        }else{
            var a = hashA.get(s[i]);
            tmpA += a;
        }

        if(!hashB.containsKey(t[i])){
            hashB.put(t[i], indexB);
            tmpB += indexB;
            indexB++;
        }else{
            var b = hashB.get(t[i]);
            tmpB += b;
        }
        i++;
    }

    if(tmpA === tmpB){
        return true;
    }
    return false;

};


function HashMap(){
    //定义长度
    var length = 0;
    //创建一个对象
    var obj = {};

    /**
    * 判断对象中是否包含给定Key
    */
    this.containsKey=function(key){
        return (key in obj);
    };

    /**
    * 判断对象中是否包含给定的Value
    */
    this.containsValue=function(value){
        for(var key in obj){
            if(obj[key] == value){
                return true;
            }
        }
        return false;
    };

    /**
    *向map中添加数据
    */
    this.put=function(key,value){
        if(!this.containsKey(key)){
            length++;
        }
        obj[key] = value;
    };

    /**
    * 根据给定的Key获得Value
    */
    this.get=function(key){
        return this.containsKey(key)?obj[key]:null;
    };

    /**
    * 获得Map的长度
    */
    this.size = function(){
        return length;
    };

    /**
    * leetcode题目特殊需求
    */
    this.findKey=function(value){
        for(var key in obj){
            if(obj[key] == value){
                return key;
            }
        }
        return null;
    };
}
