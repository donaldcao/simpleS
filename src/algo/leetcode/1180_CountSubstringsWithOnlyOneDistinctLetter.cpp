#include <vector>
#include <string>
#include <numeric>
#include <initializer_list>

using namespace std;

class Solution {
    public:
        int countLetters(string s) {
            int n = s.size();
            vector<int> dp(n, 1);
            for(int i = 1; i < n; ++i) {
                if(s[i] == s[i-1]) {
                    dp[i] = dp[i-1] + 1;
                }
            }

            return accumulate(begin(dp), end(dp), 0, [](auto &a, auto &b) { return a+b;});
        }

        int countLetters2(string s) {
            int n = s.size(), res = n;
            for(int j = 0, i = 1; i < n; ++i) {
                if(s[i] == s[j]) {
                    res += i - j;
                } else {
                    j = i;
                }
            }
            return res;
        }

        int countLetter3(string s) {
            int res = 0;
            int i = 0, j = 0, l = s.size();
            while(i < l) {
                while((j < l) && (s[j] == s[i])) j++;
                int n = j - i;
                res += (n*(n+1)) / 2;
                i = j;
            }
            
            return res;
        }

        int countLetter4(string s) {
            int res = 0;
            int lo = 0, hi = 0, size = s.size();
            while(lo < size){
                while ((hi < size) && (s[hi] == s[lo])) ++hi;
                int n = hi - lo;
                res += (n * (n+1)) / 2;
                lo = hi;
            }
            return res;
        }
};