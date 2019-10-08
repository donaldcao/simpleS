function bucketSort(arr, bucketSize) {
    if(arr.length === 0) {
        return arr;
    }

    var i;
    var minValue = arr[0];
    var maxValue = arr[0];

    // First loop to find the min and max value.
    for (i = 1; i< arr.length; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i];
        } else if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    // bucket size
    var DEFAULT_BUCKET_SIZE = 5;
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var buckets = new Array(bucketCount);
    for(i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // Assign element to relative bucket according to map function.
    for(i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i<buckets.length; i++){
        insertionSort(buckets[i]);
        for(var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;

}