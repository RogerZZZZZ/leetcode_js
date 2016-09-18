/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2) return 0;
    var bestTimeBuy = prices[0],
        bestTimeSell = 0,
        maxProfitVal = 0;
    var index = 1;
    for(; index < prices.length; index++){
        if(bestTimeBuy > prices[index]){
            bestTimeBuy = prices[index];
            bestTimeSell = 0;
        }else{
            bestTimeSell = prices[index];
        }
        var tmpProfit = bestTimeSell - bestTimeBuy;

        maxProfitVal = maxProfitVal > tmpProfit ? maxProfitVal : tmpProfit;
    }

    return maxProfitVal;
};
