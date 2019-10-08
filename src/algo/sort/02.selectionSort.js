function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for ( var i = 0; i < len -1; i++) {
        minIndex = i;
        for( var j = i +1; j <len; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if(i != minIndex) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

var arr = [0,10,99,37,43,79,60];
selectionSort(arr);
console.log(arr);