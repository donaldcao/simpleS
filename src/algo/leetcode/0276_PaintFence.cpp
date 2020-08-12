
class Solution{
    int numWays(int n, int k) {
        if( n==0) return 0;
        int same = 0, diff = k;
        for(int i = 2; i <= n; ++i) {
            int t = diff;
            diff = (same + diff) * (k - 1);
            same = t;
        }
        return same + diff;
    }
};