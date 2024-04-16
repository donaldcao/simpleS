

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
