
#include <vector>
#include <iostream>

using namespace std;

class Solution{
    public:
        vector<int> findAll(TreeNode root){
            vector<int> res;
            dfs(root, res);
            return res;
        }

    private:
        void dfs(TreeNode *node, vector<int>& v) {
            if(!node) return;

            if(node->left && !node->right) {
                res.push_back(node->left->val);
            }
            if(!node->left && node->right) {
                res.push_back(node->right->val);
            }

            dfs(node->left, v);
            dfs(node->right, v);
        }
};