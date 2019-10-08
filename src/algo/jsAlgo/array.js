//var dayOfWeek = [];
let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday', 'Saturday'];

for ( let i = 0; i< dayOfWeek.length; i++) {
    console.log(dayOfWeek[i])
}

const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for(let i = 1; i< 20; i++) {
    console.log(fibonacci[i]);
}

fibonacci[fibonacci.length] = fibonacci[fibonacci.length-1] + 
                            fibonacci[fibonacci.length-2];
console.log(fibonacci[fibonacci.length -1]);

// push 插入结尾
// unshift 插入到开头.
// 尾部删除元素 .pop
// 头部删除 .shift 

var matrix = [[1,3,46,9], [20,37,46,97]];
console.log(typeof(matrix));
console.table(matrix);
