/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var tmp = str.split(" ");
    if(tmp.length !== pattern.length || tmp.length === 0) return false;
    var i = 0;
    var hashmap = new HashMap();
    while(i < tmp.length){
        if(!hashmap.containsKey(pattern[i])){
            if(hashmap.findKey(tmp[i])){
                return false;
            }
            hashmap.put(pattern[i], tmp[i]);
        }else if(hashmap.get(pattern[i]) !== tmp[i] || hashmap.findKey(tmp[i]) !== pattern[i]){
            return false;
        }
        i++;
    }
    return true;
};

function HashMap(){
    //定义长度
    var length = 0;
    //创建一个对象
    var obj = new Object();

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
