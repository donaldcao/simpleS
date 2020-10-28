#include <string>
#include <vector>

using namespace std;

class Solution{
    public:
    vector<string> generateAbbreviations(string word) {
        vector<string> res{word};
        helper(word, 0, res);
        return res;
    }

    void helper(string word, int pos, vector<string> &res) {
        for(int i = pos; i < word.size(); ++i) {
            for(int j = 1; i + j <= word.size(); ++j) {
                string t = word.substr(0, i);
                t += to_string(j) + word.substr(i+j);
                res.push_back(t);
                helper(t, i + 1 + to_string(j).size(), res);
            }
        }
    }
};