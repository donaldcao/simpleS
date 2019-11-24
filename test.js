function find(arr) {
    if(!arr || !arr.length || arr.length <= 0) return;
    let temp = {};
    let hasPositiveValue = false;
    for(let index = 0; index < arr.length; index++) {
        if(arr[index] > 0 ) {
            hasPositiveValue = true;
        }
        temp[arr[index]] = index;
    }
    if(!hasPositiveValue) {
        return 1;
    }

    // let keys = temp.getKeys();
    for(let index = 1; index < 100000; index++) {
        if(!temp.containsKeys(index)) {
            return index;
        }
    }
}