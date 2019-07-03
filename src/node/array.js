
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr.slice(0, 3);
arr.slice(3);
var arrCopy = arr.slice();

arr.push('e', 'g');
arr.pop();

// unshift添加元素到头部， shift() 从头部删除元素
arr.unshift('a', 'b');
arr.shift();

function getlongestSubString(input) {
    var temp = [];
    temp.concat(input);

    var counter = int[26];

    temp.filter(function(ch) {
        if(ch < 'a' || ch > 'z') return;
        counter[ch-'a'] ++;
    });
}

// array.slice, array.pop and array.shift
var matrix = [];
for(var i = 0; i < 10; i++) {
    matrix[i] = [];
    for(var j = 0; j < 10; j++) {
        matrix[i][j] = (i+1) * (j+1);
        console.dir(matrix[i][j]);
    }
    console.log();
    console.timeline();
}

var flatArray = [];
flatArray.concat(matrix);
flatArray.forEach(e => {
    console.log(e);
});


var numbers = new Array(1,2,3,4);
console.log(numbers.reduce(function(previousValue, currentValue, currentIndex, arr ) {
    console.log('previousValue: ' + previousValue);
    console.log('currentValue: ' + currentValue);
    return previousValue + currentValue;
}));




numbers.fill(100, 3, 10);
console.log(numbers.toString());




