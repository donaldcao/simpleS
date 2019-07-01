
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr.slice(0, 3);
arr.slice(3);
var arrCopy = arr.slice();

arr.push('e', 'g');
arr.pop();

// unshift添加元素到头部， shift() 从头部删除元素
arr.unshift('a', 'b');
arr.shift();
let keys = arr.keys();
console.log(keys.next());

arr.sort(function(a, b) {
    if(a.toLowerCase() < b.toLowerCase() ) {
        return -1;
    }

    if(a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }

    return 0;
});

