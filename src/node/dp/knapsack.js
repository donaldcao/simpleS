// index, weight, value
function knapsack(W, N, weights, values) {
    let dp = new Array(N+1);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(W+1);
        for(let j = 0; j < dp[i].length; j++) {
            dp[i][j] = 0;
        }
    }

    // iterate number
    for(let i = 1; i <= N; i++) {
        let w=weights[i-1], v = values[i-1];
        // iterate all possible weight.
        for(let j = 1; j <= W; j++) {
            if(j >= w) {
                dp[i][j] = Math.max(dp[i-1][j], v + dp[i-1][j-w]);
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }

    return dp[N][W];
}