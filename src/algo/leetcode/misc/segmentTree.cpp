#include <iostream>

using namespace std;

class Solution {
public:
    void build(int node, int start, int end) {
        if(start == end) {
            tree[node] = A[start];
        } else {
            int mid = (start + end) / 2;
            build(node*2, start, mid);
            build(node*2+1, mid+1, end);
            tree[node] = tree[node*2] + tree[node*2+1];
        }
    }

    void update(int node, int start, int end, int idx, int val) {
        if(start == end) {
            A[idx] += val;
            tree[node] += val;
        } else {
            int mid = (start + end) / 2;
            if(start <= idx && idx <= mid) {
                update(node*2, start, mid, idx, val);
            } else {
                update(node*2 + 1, mid+1, end, idx, val);
            }
            tree[node] = tree[node*2] + tree[node*2+1];
        }
    }

    void query(int node, int start, int end, int l, int r) {
        if( r < start || end < l) return 0; // range represented by a node is completely outside the given range
        if( l <= start && end <= r) return tree[node]; // range represented by a node is completely inside the give range.

        // range represented by a node is partially inside and partially outside the given range.
        int mid = (start + end) / 2;
        int p1 = query(node*2, start, mid, l, r);
        int p2 = query(node*2, mid+1, end, l, r);
        return (p1 + p2);

    }
};