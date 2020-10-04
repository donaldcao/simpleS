class Solution {
    public:
        string boldWords(vector<string>& words, string s) {
            int n = s.size();
            string res = "";
            vector<bool> bold(n, false);
            for(string& word : words) {
                int len = word.size();
                for(int i = 0; i < n-len; ++i) {
                    if(s[i] == word[0] && s.substr(i, len) == word) {
                        for(int j = i; j <i + len; ++j) bold[j] = true;
                    }
                }
            }
            for(int i = 0; i < n; ++i) {
                if(bold[i]) {
                    if(i == 0 || !bold[i-1]) res +="<b>";
                    res.push_back(s[i]);
                    if(i == n-1 || !bold[i+1]) res +="</b>";
                } else {
                    res.push_back(s[i]);
                }
            }

            return res;
        }

        string boldWords(vector<string>& words, string s) {
            int n = s.size();
            string res = "";
            unordered_set<int> bold;
            for(string& word : words) {
                int len = word.size();
                for(int i = 0; i < n-len; ++i) {
                    if(s[i] == word[0] && s.substr(i, len) == word) {
                        for(int j = i; j < i+len; ++j) bold.insert(j);
                    }
                }
            }

            for(int i = 0; i < n; ++i) {
                if(bold.count(i) && !bold.count(i-1)) res += "<b>";
                res += s[i];
                if(bold.count(i) && !bold.count(i+1)) res += "</b>";
            }
            return res;
        }
};