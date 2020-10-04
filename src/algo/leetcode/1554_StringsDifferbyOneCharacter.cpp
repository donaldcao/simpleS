
#include <vector>
#include <string>
#include <unordered_set>

using namespace std;

class Solution{
    public:
    
    bool existStringDifferbyOneCharacter(vector<string> dict) {
        unordered_set<string> s;
        for(int i = 0; i < dict.size(); ++i) {
            string &word = dict[i];
            for(int j = 0; j < word.size(); ++j) {
                char tmp = word[j];
                word[j] = '*';
                if(s.find(word) != s.end()) return true;
                s.insert(word);
                word[j] = tmp;
            }
        }
        return false;
    }
};