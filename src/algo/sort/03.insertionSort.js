function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for( var i = 1; i < len; i++) {
        preIndex = i -1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
}

var arr = [9,17,20,39,78,37,40,1000];
insertionSort(arr);
console.log(arr);