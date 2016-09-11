var _ = Object.create(null);

/**
 * Helper function that calls func n times
 */
_.times = function(n, func, context) {
    var i;
    for (i = 0; i < n; i += 1) {
        func.call(context, i);
    }
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var ret = [];

    // numRow times
    _.times(numRows, function(i)  {
        // `i` is a zero based index; so convert it to the row number by adding 1
        var row = i + 1;

        // First one is made by hand
        if (ret.length === 0) {
            ret.push([1]);
            return;
        }

        var prev = ret[ret.length - 1];
        var now = [];

        // the 3rd row will have 3 elements,
        // 4th row will have 4 elements, and so on
        // so we do it `row` number of times

        _.times(row, function(j) {
            // the first element is always 1
            if (j === 0) {
                now.push(1);
                return;
            }

            // the last element is always 1
            if (j === row-1) {
                now.push(1);
                return;
            }

            // sum of left element and right element immediately above
            now.push(prev[j-1] + prev[j]);
        });

        ret.push(now);
    });

    return ret;
};
