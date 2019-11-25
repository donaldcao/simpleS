
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

class LinkedList {
    constructor(equalsFn) {
        this.count = 0;
        this.head = null;
    }

    push(element) {
        const node = new Node(element);

        if(this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.count++;
    }

    insert(element, position) {

    }

    getElementAt(index) {

    }

    remove(element) {

    }

    indexOf(element) {

    }

    removeAt(position){


    }

    isEmpty() {

    }

    size() {

    }

    toString() {

    }

}

var linkedList = new LinkedList();
linkedList.push(10);
linkedList.push(31);

var obj = {};
var name = "donald";
obj[name] = name;
var age = 34;
obj[age] = age;
console.log(typeof(Object.keys(obj)));
third = 3;
obj[third] = third;
console.log(obj);

var anotherThird = "003";
obj[anotherThird] = anotherThird;
console.log(obj);

for(let key in obj) {
    console.log(key);
}
let layer = 0;
function multiply(n) {
    if(n === 1) {
        // return 1;
    }
    layer++;
    console.log(layer);

    // Any tail call optimization.
    return n*multiply(n-1);
}

console.log(multiply(50));

