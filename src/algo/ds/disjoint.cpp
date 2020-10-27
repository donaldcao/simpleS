#include <vector>

class disjoint{

vector<int> parent;

public:
    int find(int x) {
        if(x != parent[x]){
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

};





