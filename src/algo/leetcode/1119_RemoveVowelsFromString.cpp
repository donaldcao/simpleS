#include <string>

using namespace std;

class Solution {
    public:
        string removeVowels(string s) {
            if(s.empty()) return s;
            string res;

            unordered_set<char> vowels{'a', 'e', 'i', 'o', 'u'};
            for(char c : s) {
                if(vowels.find(c) == vowels.end()) {
                    res += c;
                }
            }
            return res;

        }
};