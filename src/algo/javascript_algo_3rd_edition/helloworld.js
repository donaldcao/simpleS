class Stack{
    constructor() { 
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    print() {
        console.log(this.items);
    }
}

var stack = new Stack();
stack.push(100);
stack.push(23);
stack.print();

let language = 'Javascript';
// let language = 'test';

const PI = 3.1415926;
// PI = 3;
console.log(PI);

// template string
const book = {
    name: "Study javascript algorithm"
};
console.log(book);
console.log(`你正在阅读的书是: ${book.name}`);

function restParameterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParameterFunction(1,2,'hello', true, 7));

function restParameterFunction2(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}

console.log(restParameterFunction2(2,3,1,2));

let [x, y] = ['a', 'b'];
let obj = {x, y};
console.log(obj);

const hello = {
    name: 'abcdef',
    printHello() {
        console.log(this.name);
    }
}
hello.printHello();

var hello2 = {
    name: "adasfd",
    printHello: function() {
        console.log(this.name);
    }
}
hello2.printHello();