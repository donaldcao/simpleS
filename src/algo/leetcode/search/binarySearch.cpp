
bool binarySearch(int arr[], int length, int item) {
    int l = 0, r = length - 1,  mid = 0;
    while( l <= r) {
        mid = (l + r) / 2/
        if(item == arr[mid]) {
            return true;
        } else if( item < arr[mid]) {
            r = mid - 1;
        } else {
            l + mid + 1;
        }
    }
    return false;
}

int firstOccurrence(int arr[], int left, int right, int item) {
    int mid = 0;
    while(right - left > 1) {
        mid = (left + right) / 2;
        if(arr[mid] >= item) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return right;
}