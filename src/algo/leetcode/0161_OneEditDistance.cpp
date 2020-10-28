#include <string>

using namespace std;
class Solution {
    public:
        bool isOneEditDistance(string s, string t){
            if(abs(s.size() - t.size()) > 2) return false;
            for(int i = 0; i < min(s.size(), t.size()); ++i) {
                if(s[i] != t[i]) {
                    if(s.size() == t.size()) return s.substr(i+1) == t.substr(i+1);
                    if(s.size() < t.size()) return s.substr(i) == t.substr(i+1);
                    else return s.substr(i+1) == t.substr(i);
                }
            }
            return true;
        }
};