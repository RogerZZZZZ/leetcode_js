/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex < 0) return [];
    var tmp = [1];
    for(var i = 1, num = 1; i <= rowIndex; i++){
        num = parseInt(num/i * (rowIndex - i + 1) + 0.1);
        tmp.push(num);
    }
    return tmp;
};


// public List<Integer> getRow(int rowIndex) {
//        if (rowIndex == 0) return Arrays.asList(1);
//        List<Integer> previousList = getRow(rowIndex - 1);
//        List<Integer> thisList = new ArrayList<>();
//        for (int i =0; i < previousList.size(); i++) {
//            if (i == 0) thisList.add(1);
//            if (i > 0) thisList.add(previousList.get(i) + previousList.get(i-1));
//            if (i == previousList.size() -1) thisList.add(1);
//        }
//        return thisList;
//    }
