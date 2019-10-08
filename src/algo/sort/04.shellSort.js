function shellSort(arr) {
    var len = arr.length, temp, gap = 1;
    while(gap < len/3) {
        gap = gap*3 + 1;
    }

    // times for gap, and the last gap equal 1.
    for ( gap; gap > 0; gap = Math.floor(gap/3)) {
        for( var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i -gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j + gap ] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }

}

var arr = [12,32,79,8134,34,89,342,-100];
shellSort(arr);
console.log(arr);