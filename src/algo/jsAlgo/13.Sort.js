


function bubbleSort(arr) {
    if(!arr || !arr.length) return;
    let length = arr.length;

    for(let i = 0; i < length -1; i++) {
        var noSwap = true;
        for(let j = 0; j < length -1 -i; j++) {
            if( arr[j] > arr[j+1]) {
                noSwap = false;
                /*
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1] = temp;
                */
               [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }

        if(noSwap) {
            break;
        }
    }
}


/*
var arr = [1,10, 100,20,39,70, 69];
console.log(arr);
bubbleSort(arr);
console.log(arr);
*/

function createArray(size) {
    let result = [];
    for(let i = size; i > 0; i--) {
        result.push(i);
    }

    return result;
}



let selectionSort = arr => {
    if(!arr || !arr.length) return;

    let length = arr.length;
    let minIndex;
    for(let i = 0; i < length -1; i++) {
        minIndex = i;
        for(let j = i; j < length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }

    }

    return arr;
};

let insertSort = arr => {
    if(!arr || !arr.length) return;
    let length = arr.length;
    for(let i = 1; i < length; i++) {
        let j = i;
        let temp = arr[j];
        while(j > 0 && arr[i-1] > temp) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }

    return arr;
}



function mergeSort(arr) {
    if(arr.length > 1) {
        let length = arr.length;
        let middle = Math.floor(length /2);
        let left = mergeSort(arr.slice(0, middle));
        let right = mergeSort(arr.slice(middle, length));
        merge(left, right);
    }

    return arr;
}


function merge(left, right) {
    let i = 0 
    let j = 0;
    const result = [];
    while(i <left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

        if(i < left.length) {
            for(; i < left.length; i++) {
                result.push(left[i]);
            }
        }

        if( j < right.length) {
            for(; j < right.length; j++) {
                result.push(right[j]);
            }
        }
    
    return result;
}


let quickSort = arr => {
    return quick(arr, 0, arr.length-1);
};

function quick(arr, left, right) {
    let index;
    if(arr.length > 1) {
        index = partition(arr, left, right);
        if(left < index -1) {
            quick(arr, left, index-1);
        }

        if(index < right) {
            quick(arr, index+1, right);
        }
    }
    return arr;
};

/*
function partition(arr, left, right) {
    const pivot = arr[Math.floor((right + left) /2)];

    let i = left;
    let j = right;

    while(i <= j) {
        while(arr[i] < pivot) {
            i++;
        }

        while(arr[j] > pivot) {
            j--;
        }

        if(i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}
*/

function partition(arr, left, right) {
    let pivot = arr[left];

    while(left < right) {
        while(left < right && arr[right] > pivot) {
            right--;
        }
        arr[left] = arr[right];

        while(left < right && arr[left] < pivot) {
            left++;
        }
        arr[right] = arr[left];
    }

    arr[left] = pivot;
    return left;
}

var countingSort = arr => {

    if(!arr || !arr.length) return;

    let counts = [];
    let maxValue = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }

        if(!counts[arr[i]]) {
            counts[arr[i]] = 1;
        } else {
            counts[arr[i]]++;
        }
    }

    let index = 0;
    for(let i = 0; i < maxValue + 1; i++) {
        if(counts[i]) {
            while(counts[i] > 0) {
                arr[index++] = i;
                counts[i]--;
            }
        }
    }

    return arr;
};
// -----------------------------------------------

let bucketSort = (arr, bucketSize = 5) => {
    if(arr.length < 2) {
        return arr;
    }

    const buckets = createBuckets(arr, bucketSize);
    return sortBuckets(buckets);
};

function createBuckets(arr, bucketSize) {
    let minValue = arr[0];
    let maxValue = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i];
        }
        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    const bucketCount = Math.floor((maxValue -minValue)/bucketSize) + 1;
    console.log(`bucket cout: ${bucketCount}`);
    const buckets = [];
    for(let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }

    for(let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i]-minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    return buckets;
}

function sortBuckets(buckets) {
    const sortedArr = [];
    for(let i = 0; i < buckets.length; i++) {
        if(buckets[i] && buckets.length) {
            insertSort(buckets[i]);
            sortedArr.push(...buckets[i]);
        }
    }

    return sortedArr;
}
// --------------------------------------------

function radixSort(arr, radixBase = 10) {
    if(arr.length < 2) {
        return arr;
    }

    const minValue = findMinValue(arr);
    const maxValue = finMaxValue(arr);

    let significantDigit = 1;
    while((maxValue - minValue) / significantDigit >= 1) {
        arr = countingSortForRadix(arr, radixBase, significantDigit, minValue);
        significantDigit *= radixBase;
    }
    return arr;
}

function countingSortForRadix(arr, radixBase, significantDigit, minValue) {
    let bucketsIndex;
    const buckets = [];
    const aux = [];
    for(let i = 0; i < radixBase; i++) {
        buckets[i] = 0;
    }

    for(let i = 0; i < arr.length; i++) {
        bucketsIndex = Math.floor(((arr[i] - minValue) / significantDigit) % radixBase);
        buckets[bucketsIndex]++;
    }
}

function findMinValue(arr) {
    if(!arr || !arr.length) return;

    let minValue = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}

function finMaxValue(arr) {
    if(!arr || !arr.length) return;

    let maxValue = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}








arr = createArray(10);
console.log(arr);
let countingArr  = bucketSort(arr, 5);
console.log(countingArr);
