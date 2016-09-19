/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n <=0) return false;
    if(n === 1) return true;
    var hashmap = new HashMap();
    var index = 0;
    while(n !== 1){
        var str = n + "";
        var tmp = 0;
        for(var i = 0; i < str.length; i++){
            tmp += Math.pow(str[i], 2);
        }
        if(!hashmap.containsValue(tmp)){
            hashmap.put(index, tmp);
            index++;
        }else{
            return false;
        }
        if(tmp === 1) return true;
        n = tmp;
    }

};


function HashMap(){
    //定义长度
    var length = 0;
    //创建一个对象
    var obj = {};

    /**
    * 判断Map是否为空
    */
    this.isEmpty = function(){
        return length === 0;
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
