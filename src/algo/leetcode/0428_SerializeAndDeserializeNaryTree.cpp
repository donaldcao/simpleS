
#include <iostream>
#include <vector>
#include <sstream>
#include <queue>
#include <string>

using namespace std;

struct TreeNode {
    int val;
    vector<TreeNode*> Children;
};

class Codec {
    public:
        string serialize(TreeNode *root) {
            if(!root) return "#";
            string res;
            queue<TreeNode*> q{{root}};
            while(!q.empty()) {
                TreeNode *t = q.front(), q.pop();
                res += to_string(t->val) + to_string(t->Children.size() + " ");
                for(TreeNode *child : t->Children) q.push(child);
            }
            return res;
        }

        TreeNode* deserialize(string data) {
            istringstream iss(data);
            queue<TreeNode*> qNode;
            queue<int> qSize;
            string val = "", size= "";
            iss >> val;
            if(val == "#") return nullptr;
            iss >> size;
            TreeNode *res = new TreeNode(stoi(val), {}), *cur = res;
            qNode.push(cur);
            qSize.push(stoi(size));
            while(!qNode.empty()) {
                TreeNode *t = qNode.front(), qNode.pop();
                int len = qSize.front(), qSize.pop();
                for(int i = 0; i < len; ++i) {
                    if(!(iss >> val)) break;
                    if(!(iss >> size)) break;
                    cur = new TreeNode(stoi(val), {});
                    qNode.push(cur);
                    qSize.push(stoi(size));
                    t->Children.push_back(cur);
                }
            }

        }
};