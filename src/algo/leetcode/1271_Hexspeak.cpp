#include <map>
#include <string>
#include <unordered_map>
using namespace std;

class Solution{
    public:
        string toHexspeak(string num) {
            unordered_map<int, char> mp;
            mp[0] = 'O';
            mp[1] = 'I';
            
            unsigned long long n = 0;
            for(int i = 10; i < 16; ++i) mp[i] = i-10 + 'A';
            for(char c : num) n = n * 10 + c - '0';

            string ans;
            while(n) {
                if( n % 16 > 1 && n % 16 < 10) return false;
                ans += n % 16;
                n /= 16;
            }
            return string(ans.rbegin(), ans.rend());
        }
};