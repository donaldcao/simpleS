function coinChange(coins, amount) {
    if(!coins || !coins.length || coins.length <= 0) return 0;
    if(amount <= 0) return 0;

    let dp = new Array(amount+1).fill(amount+1);
    dp[0] = 0;
    for(let currAmount = 1; currAmount<dp.length; currAmount++) {
        for(let i = 0; i < coins.length; i++) {
            let coin = coins[i];
            if(currAmount - coin < 0) continue;
            dp[currAmount] = Math.min(dp[currAmount], 1 + dp[currAmount-coin]);
        }
    }

    return dp[amount] == amount+1 ? -1 : dp[amount];
}