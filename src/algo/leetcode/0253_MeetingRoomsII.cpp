#include <iostream>
#include <queue>
#include <map>

using namespace std;

class Solution{
  public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) { return a[0] < b[0];});
        priority_queue<int, vector<int>, greater<int>> q;
        for(auto interval: intervals) {
            if(!q.empty() && q.top() <= interval[0]) q.pop();
            q.push(interval[1]);
        }
        return q.size();
    }
    
    int minMeetingRooms(vector<vector<int>>& intervals) {
        map<int,int> m;
        for(auto& i : intervals) {
            ++m[i[0]];
            --m[i[1]];
        }
        int rooms = 0, res = 0;
        for(auto it : m) {
            res = max(res, rooms += it.second);
        }
        return res;
    }
};


