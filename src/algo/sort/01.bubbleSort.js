
function bubbleSort(arr) {
    var len = arr.length;
    for( var i = 0; i < len -1; i++) {
        var flag = true;
        for(var j = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                flag = false;
            }
        }
        
        if(flag) {
            break;
        }
    }

}

var arr = [1,10, 100,20,39,70, 69];
bubbleSort(arr);
console.log(arr);