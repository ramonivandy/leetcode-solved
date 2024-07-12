func maxProfit(prices []int) int {
    if len(prices) < 2 {
        return 0
    }

	maxProfit := 0
    currentBuy := prices[0]
    currentSell := prices[1]
    
    for i := 0; i < len(prices); i++ {

        if prices[i] < currentBuy {
            if i+1 < len(prices) {
                currentBuy = prices[i]
                currentSell = prices[i+1]

                if (currentSell - currentBuy) > maxProfit {
                    maxProfit = currentSell - currentBuy
                }
            }
        } 

        if prices[i] > currentBuy {
            currentSell = prices[i]
            if (currentSell - currentBuy) > maxProfit {
                maxProfit = currentSell - currentBuy
            }
        } 
    
    } 

    return maxProfit

}