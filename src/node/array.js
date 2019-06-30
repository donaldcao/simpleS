
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr.slice(0, 3);
arr.slice(3);
var arrCopy = arr.slice();

arr.push('e', 'g');
arr.pop();

// unshift添加元素到头部， shift() 从头部删除元素
arr.unshift('a', 'b');
arr.shift();
