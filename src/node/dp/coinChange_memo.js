
function coinChange(coins, amount) {
    if(!coins || !coins.length || coins.length <= 0) return 0;
    if(amount <= 0) return 0;
    let memo = new Array(amount+1).fill(amount+1);
    return helper(coins, amount, memo);
}

function helper(coins, amount, memo) {
    if(amount === 0) return 0;
    let result = amount + 1;
    for(let i = 0; i < coins.length; i++) {
        let currCoin = coins[i];
        if(amount - currCoin < 0) continue;
        let subResult = helper(coins, amount-currCoin, memo);
        if(subResult === -1) continue;
        result = Math.min(result, 1 + subResult);
    }

    memo[amount] = result;
    return memo[amount];
}

console.log(coinChange([1,2,5], 21));

