#include <stdio.h>

int main() {
    union union_bytes
    {
        int num;
        char arr[2];

    } u_bytes = {
        .num = 0x0102,
    };
    
    if(u_bytes.arr[0] == 2){
        printf("%s\n", "小端");
    }


    return 0;
}