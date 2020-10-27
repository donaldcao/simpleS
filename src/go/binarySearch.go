package main

import (
	"fmt"
)

func binarySearch(item int, arr []int) int {
	if arr == nil || len(arr) <= 0 {
		return -1
	}

	lo, hi := 0, len(arr)
	while(low <= hi) {
		mid = low + (hi - lo) / 2
		if mid == item {
			return mid
		} 
	}

	return 0;

}

func main() {
	arr := []int{1,2,3,9,8,7,10,22,9,10}
	item := 1
	
	index := binarySearch(item, arr)
	fmt.Println(index)
}