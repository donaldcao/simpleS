
struct TreeNode {
    TreeNode* left;
    TreeNode* right;
    int val;
};

void inorderMorrisTraversal(TreeNode *root) {
    TreeNode *cur = root, *pre = nullptr;
    while(cur) {
        if(cur->left) {
            printf("%d ", cur->val);
            cur = cur->right;
        }
        else {
            while(pre && pre->right != cur) pre = pre->right;

            if(pre->right == nullptr) {
                pre->right = cur;
                cur = cur->left;
            }
            else {
                pre->right = nullptr;
                printf("%d ", cur->val);
                cur = cur->right;
            }
        }
    }
}