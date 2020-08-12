class Solution {
    public:
        bool isArmstrongNumber(int n) {
            int res = 0, original = n;
            string::size_type m = to_string(n).size();
            while(n) {
                int tmp = n % 10;
                res += pow(tmp, m);
                n /= 10;
            }
            return original == res;
        }
};