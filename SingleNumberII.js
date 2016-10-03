/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var len = nums.length;
    if(len <= 1) return nums;
    var hashmap = new HashMap(),
        res = [];
    for(var i = 0; i < len; i++){
        if(!hashmap.containsKey(nums[i])){
            hashmap.put(nums[i], i);
        }else{
            hashmap.remove(nums[i]);
        }
    }
    res = hashmap.getLeft();
    return res;
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
    * 以数组形式返回hashmap中的key值
    */
    this.getLeft=function(){
        var res = [];
        for(var key in obj){
            res.push(parseInt(key));
        }
        return res;
    }

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

// java solution. using bit
// public int[] singleNumber(int[] nums) {
//     int result[] = new int[2];
//     int xor = nums[0];
//     for (int i=1; i<nums.length; i++)
//     {
//         xor ^= nums[i];
//     }
//
//     int bit = xor & ~(xor-1);
//     int num1 = 0;
//     int num2 = 0;
//
//     for (int num : nums)
//     {
//         if ((num & bit) > 0)
//         {
//             num1 ^= num;
//         }
//         else
//         {
//             num2 ^= num;
//         }
//     }
//
//     result[0] = num1;
//     result[1] = num2;
//     return result;
// }
