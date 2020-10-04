#include <string>
#include <vector>

using namespace std;

class Solution {
    public:
        int calculateTime(string keyboard, string word) {
            vector<int> dis(26);
            for(int i = 0; i < keyboard.size(); ++i) {
                dis[keyboard[i] - 'a'] = i;
            }
            int res = 0;
            for(int i = 1; i < word.size(); ++i) {
                res += abs(dis[word[i] - 'a'] - dis[word[i-1] - 'a']);
            }
            return res;
        }

};