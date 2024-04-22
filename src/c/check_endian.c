<<<<<<< HEAD


#include <stdio.h>

void main() {
union {
    short value;
    char union_bytes[sizeof(short)];
} test;

test.value = 0x0102;
if((test.union_bytes[0] == 1 ) && ( test.union_bytes[1] == 2 )) {
	printf("big endian\n");
}
else {
	printf("little endian\n");
}
printf("%x\n", &(test.union_bytes[0]));
printf("%x\n", &(test.union_bytes[1]));
 }
=======
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
>>>>>>> 75ac8546abfc84b988892bab1e3d63bd653eeb9e
