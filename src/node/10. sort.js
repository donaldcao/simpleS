import { COPYFILE_FICLONE_FORCE } from "constants";

function ArrayList() {
    var array = [];

    this.insert = function(item) {
        array.push(item);
    };

    this.toString = function() {
        return array.join();
    };

    this.bubbleSort = function() {
        var length = array.length;
        for(var i = 0; i < length; i++) {
            for( var j = 0; j < length -1; j++) {
                if(array[j] > array[j+1]) {
                    swap(array, j, j+1);
                }
            }
        }
    };

    var swap = function(array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    this.modifiedBubbleSort = function() {
        var length = array.length;
        for(var i = 0; i < length; i++) {
            for(var j = 0; j < length -1 - i; j++) {
                if(array[j] > array[j+1]) {
                    swap(j, j+1);
                }
            }
        }
    };

    this.selectionSort = function() {
        var length = array.length, indexMin;

        for(var i = 0; i < length -1; i++) {
            indexMin = i;
            for (var j = i; j < length; j++) {
                if(array[indexMin] > array[j]) {
                    indexMin = i;
                    for(var j = i; j < length; j++) {
                        if(array[indexMin] > array[j]) {
                            indexMin = j;
                        }
                    }

                    if( i != indexMin) {
                        swap(i, indexMin);
                    }
                }
            }
        }
    };

    this.mergeSort = function() {
        array = mergeSortRec(array);
    };

    var mergeSortRec = function(array) {
        var length = array.length;

        if(length == 1) {
            return array;
        }

        var mid = Math.floor(length/2),
            left = array.slice(0, mid),
            right = array.slice(mid, length);

        return merge(mergeSortRec(left), mergeSortRec(right));
    };

    var merge = function(left, right) {
        var result = [],
            il = 0,
            ir = 0;

        while(il < left.length && ir < right.length) {
            if(left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while( il < left.length) {
            result.push(left[i]++);
        }

        while(ir < right.length) {
            result.push(right[ir++]);
        }

        return result;
    };

    this.quickSort = function() {
        quick(array, 0, array.length - 1);
    };

    var quick = function(array, left, right) {
        var index;
        if(array.length > 1) {
            index = partition(array, left, right);

            if(left < index -1 ) {
                quick(array, left, index-1);
            }

            if(index < right) {
                quick(array, index, right);
            }
        }
    };

    var partition = function(array, left, right) {
        var pivot = array[Math.floor(right + left) / 2],
            i = left,
            j = right;

        while( i <= j) {
            while(array[i] < pivot) {
                i++;
            }
            while(array[j] > pivot) {
                j--;
            }

            if(i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }

        return i;
    };

    // heap sort
    // 节点L的左节点是2*L
    // 节点R的右节点是2*R + 1
    this.heapSort = function() {
        var heapSize = array.length;
        buildHeap(array);

        while(heapSize > 1) {
            heapSize--;
            swap(array, 0, heapSize);
            heapify(array, heapSize, 0);
        }
    };

    var buildHeap = function(array) {
        var heapSize = array.length;
        for(var i = Math.floor(array.length/2); i >=0; i--) {
            heapify(array, heapSize, i);
        }
    };

    var heapify = function(array, heapSize, i) {
        var left = i * 2 + 1,
            right = i * 2 + 2,
            largest = i;

            if(left < heapSize && array[left] > array[largest]) {
                largest = left;
            }

            if( right < heapSize && array[right] > array[largest]) {
                largest = right;
            }

            if(largest != i) {
                swap(array, i, largest);
                heapfiy(array, heapSize, largest);
            }
    }














}

