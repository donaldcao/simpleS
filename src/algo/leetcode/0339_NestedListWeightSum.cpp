
class Solution {
public:
    int depthSum(vector<NestedInteger>& nestedList) {
        return helper(nestedList, 1);
    }
private:
    int helper(vector<NestedInteger>& nl, int depth) {
        int res = 0;
        for(auto a : nl) {
            res += a.isInteger() ? a.getInteger() * depth : helper(a, depth+1);
        }
        return res;
    }

};