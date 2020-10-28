class Solution{
    public:
        ListNode* plusOne(ListNode* head) {
            if(!head) return head;
            int carry = helper(head);
            if(carry) {
                ListNode *res = new ListNode(1);
                res->next = head;
                return res;
            }
            return head;
        }


        int helper(ListNode* node) {
            // 这里返回的carry实际是加上的那个1.
            if(!node) return 1;
            int carry = helper(node->next);
            int sum = node->val + carry;
            node->val = sum % 10;
            return sum > 9;
        }
};