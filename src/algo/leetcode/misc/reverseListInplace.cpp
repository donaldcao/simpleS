#include <iostream>
#include <bitset>

using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v, Node* n) : val(v), next(n) {
    }
};

class Solution{
    public:
       Node* reverseListInplace(Node* root) {
            Node *current = root, *previous = nullptr;
            while(current) {
                Node* tmp = current->next;
                current->next = previous;
                previous = current;
                current = tmp;
            }
            return previous;
        }

        void printList(Node* root) {
            Node* node = root;
            while(node != nullptr) {
                cout << node->val ;
                if(node->next) {
                    cout << "->";
                }
                node = node->next;
            }
        }
};

int recursion(int i ) {
    cout << i << endl;
    return recursion(i-1);
}

int main() {

    recursion(1 << 20);
    bitset<32> b(100);
    cout << b.count() << endl;
    Node root(10, nullptr);
    root.next = new Node(11, nullptr);
    root.next->next = new Node(12, nullptr);
    Solution s;
    s.printList(&root);
    auto head = s.reverseListInplace(&root);
    cout << endl;
    s.printList(head);
    cout << endl;
    cout << "hello world!" << endl;
    return 0;
}
