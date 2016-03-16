/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === null) return null;
    var hm = new HashMap();
    var maxLen = 0;
    for(var i = 0; i < s.length; i++){
        if(!hm.containsValue(s[i])){
            hm.put(i, s[i]);
            maxLen = maxLen < hm.size() ? hm.size() : maxLen;
        }else{
            var tem = hm.findKey(s[i]);
            hm.clearBefore(tem);
            hm.put(i, s[i]);
        }
    }
    return maxLen;
};


function HashMap(){
    //定义长度
    var length = 0;
    //创建一个对象
    var obj = new Object();

    /**
    * 判断Map是否为空
    */
    this.isEmpty = function(){
        return length == 0;
    };

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
    * 根据给定的Key删除一个值
    */
    this.remove=function(key){
        if(this.containsKey(key)&&(delete obj[key])){
            length--;
        }
    };

    /**
    * 获得Map中的所有Value
    */
    this.values=function(){
        var _values = new Array();
        for(var key in obj){
            _values.push(obj[key]);
        }
        return _values;
    };

    /**
    * 获得Map中的所有Key
    */
    this.keySet=function(){
        var _keys = new Array();
        for(var key in obj){
            _keys.push(key);
        }
        return _keys;
    };

    /**
    * 获得Map的长度
    */
    this.size = function(){
        return length;
    };

    /**
    * 清空Map
    */
    this.clear = function(){
        length = 0;
        obj = new Object();
    };

    /*
    * leetcode特殊需求
    */
    this.clearBefore = function(key){
        var delNum = 0;
        for(var _key in obj){
            if(_key <= key){
                this.remove(_key);
                delNum++;
            }
        }
        return delNum;
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

/*
//HashMap的速度没有字符串操作lastIndexOf速度快
var lengthOfLongestSubstring = function(s) {
    var maxLen,
        l,
        r;

    if (s.length < 2) {
        return s.length;
    }

    maxLen = 0;

    for (l = 0, r = 1; r < s.length; r++) {
        i = s.lastIndexOf(s[r], r-1);
        if (i >= 0) {
            maxLen = Math.max(maxLen, r - l);
            l = Math.max(l, i + 1);
        }
    }
    return Math.max(maxLen, r - l);
};

*/
