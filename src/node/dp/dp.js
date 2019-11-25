// DP详解
// https://blog.csdn.net/chachapaofan/article/details/99659113


// 1. 暴力算法
function fib(n) {
    if( n === 1 || n === 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(20));

// 2. 带备忘录的递归解法
function fib2(n) {
    if( n < 0 ) return 0;

    let memo = new Array(n+1);
    for(let index = 0; index < memo.length; index++) {
        memo[index] = 0;
    }

    return helper(memo, n);
}

function helper(memo, n) {
    if( n === 1 || n === 2 ) return 1;

    if(memo[n] !== 0) return memo[n];
    memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
    return memo[n];
}

console.log(fib2(20));

// 3. DP
function fib3(n) {
    let dp = new Array(n+1);
    dp[1] = dp[2] = 1;
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] +dp[i-2];
    }

    return dp[n];
}

console.log(fib3(20));


function coinChange(coins, amount) {
 if(amount <= 0) return 0;

 let ans = Number.MAX_VALUE;
 for(let i = 0; i < coins.length; i++) {
     if(amount - coins[i] < 0) continue;
    let subPro = coinChange(coins, amount - coins[i]);
    if(subPro == -1) continue;
    ans = Math.min(ans, subPro + 1);
 }

 return ans === Number.MAX_VALUE ? -1 : ans;
}


console.log(coinChange([1,2,5], 11));


function coinChange2(coins, amount) {
    let memo = new Array(amount+1);
    for(let i = 0; i < memo.length; i++){
        memo[i] = -2;
    }

    return coinChange2Helper(coins, amount, memo);
}

function coinChange2Helper(coins, amount, memo) {
    if(amount === 0) return 0;
    if(memo[amount] !== -2) return memo[amount];
    let ans = Number.MAX_VALUE;
    for(let i = 0; i < coins.length; i++) {
        if(amount - coins[i] < 0) continue;
        let subProb = coinChange2Helper(coins, amount - coins[i], memo);

        //子问题无解
        if(subPro == -1) continue;
        ans = Math.min(ans, subProb + 1);
    }

    // 记录本轮答案
    memo[amount] = (ans === Number.MAX_VALUE) ? -1 : ans;
    return memo[amount];
}

// DP
function coinChange3(coins, amount) {
    let dp = new Array(amount + 1);
    dp[0] = 0;
    for(let i = 1; i < dp.length; i++) {
        dp[i] = amount + 1;
    }

    for(let i = 1; i <= amount; i++ ) {
        for(let index = 0; index < coins.length; index++) {
            if(coins[index] <= i) {
                dp[i] = Math.min(dp[i], dp[i-coins[index]] + 1);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
}

let count = coinChange3([1,2,5], 11);
console.log(count);






