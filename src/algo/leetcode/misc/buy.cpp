#include <iostream>
#include <vector>

using namespace std;

class Solution{

public:
    int buyCount(vector<int> goods, int money) {
        int res = 0;
        for(int i = 1; i <= money; ++i) {
            helper(goods, 0, i, res);
        }
        return res;
    }

    void helper(vector<int> &goods, int start, int target, int &res) {
        if(target < 0) return;
        else if(target == 0) res++;
        else {
            for(int i = start; i < goods.size(); ++i ){
                target -= goods[i];
                helper(goods, i, target, res);
                target += goods[i];
            }
        }
    }
};

int main() {
    Solution c;
    vector<int> goods = {1,2,3,4,5,6,7,8,9,10};
    int money = 10;
    cout << c.buyCount(goods, money) << endl;
}