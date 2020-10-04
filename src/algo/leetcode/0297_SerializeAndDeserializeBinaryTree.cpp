
#include <iostream>
#include <sstream>
#include <string>
#include <queue>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
};


// DFS 
class Solution{
    public:
        string serialize(TreeNode *root) {
            ostringstream out;
            serialize(root, out);
            return out.str();
        }

        TreeNode * deserialize(string data) {
            istringstream in(data);
            return deserialize(in);
        }

    private:

        void serialize(TreeNode *node, ostringstream &out) {
            if(node) {
                out << node->val << ' ';
                serialize(node->left);
                serialize(node->right);
            }
            else {
                out << "# ";
            }
        }

        TreeNode *deserialize(istringstream &in) {
            string val;
            in >> val;
            if(val == "#") return nullptr;
            TreeNode *node = new TreeNode(stoi(val));
            node->left = deserialize(in);
            node->right = deserialize(in);
            return node;
        }
};

// BFS
class Codec {
    public:
        string serialize(TreeNode *node) {
            ostringstream out;
            queue<TreeNode*> q;
            if(node) q.push(node)
            while(!q.empty()) {
                TreeNode *t = q.front(), q.pop();
                if(t) {
                    out << q->val << ' ';
                    q.push(t->left);
                    q.push(t->right);
                }
                else {
                    out << "# ";
                }
            }
            return out.str();
        }

        TreeNode *deserialize(string data) {
            if(data.empty()) return nullptr;
            istringstream in(data);
            queue<TreeNode*> q;
            string val;
            in >> val;
            TreeNode *res = new TreeNode(stoi(val)),  *cur = res;
            q.push(cur);
            while(!q.empty()) {
                TreeNode *t = q.front(), q.pop();
                if(!(in>>val)) break;
                if(val != "#") {
                    cur = new TreeNode(stoi(val));
                    q.push(cur);
                    t->left = cur;
                }
                if(!(in >> val)) break;
                if(val != "#") {
                    cur = new TreeNode(stoi(val));
                    q.push(cur);
                    t->right = cur;
                }
            }
            return res;
        }
};