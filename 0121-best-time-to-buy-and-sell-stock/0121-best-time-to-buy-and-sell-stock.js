/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let res = 0;
    for(let i = 1; i < prices.length; i++){
        if(buy > prices[i]){
            buy = prices[i];
        }
        let profit = prices[i] - buy;
        res = Math.max(res, profit);
    }  

    return res
};