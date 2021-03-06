#include <vector>

using namespace std;

class TicTacToe {
    
    public:
        TicTacToe(int n) : rows(n), cols(n), N(n), diag(0), rev_diag(0) {}

        // player number is 1 or 2, add == 1 if player is 1, or add == -1 if player is 2.
        int move(int row, int col, int player) {
            int add = (player == 1 ? 1 : -1);
            rows[row] += add, cols[col] += add;
            diag += (row == col ? add : 0), rev_diag += (row + col == N -1 ? add : 0);
            return (abs(rows[row]) == N || abs(cols[col]) == N || abs(diag) == N || abs(rev_diag) == N) ? player : 0;
        }

    private:
        vector<int> rows, cols;
        int diag, rev_diag, N;

};