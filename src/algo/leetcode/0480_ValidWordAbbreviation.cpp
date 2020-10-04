#include <string>
#include <iostream>

using namespace std;

class Solution{
    public:
        bool validWordAbbreviation(string word, string abbr) {
            int i = 0, j = 0, m = word.size(), n = abbr.size();
            while( i < m && j < n) {
                if(abbr[j] >= '0' && abbr[j] <= 9) {
                    if(abbr[j] == '0') return false;
                    int val = 0;
                    while(j < n && isdigit(abbr[j])) {
                        val = val * 10 + (abbr[j] - '0');
                    }
                    i += val;
                } else {
                    if(word[i++]) != abbr[j++]) return false;
                }
            }

            return i == m && j == n;
        }
};