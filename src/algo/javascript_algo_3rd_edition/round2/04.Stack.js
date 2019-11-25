
// 创建基于数组的Stack
 class Stack{
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
    pop() {
        if(this.isEmpty()) return undefined;
        return this.items.pop();
    }

    peek() {
        if(this.isEmpty()) return undefined;
        return this.items[this.items.length -1];
    }

    isEmpty() {
        return this.items.length ===0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(29);
console.log(stack.peek());
console.log(stack.pop());

// 基于对象存储的Stack
class Stack2{
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[++this.count] = element;
    }

    pop() {
        if(isEmpty()) return undefined;

        let element = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return element;
    }

    isEmpty(){
        return this.count === 0;
    }

    peek() {
        if(isEmpty()) return undefined;

        return this.items[this.count];
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    size() {
        return this.count;
    }
}

// 基于链表的Stack

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1);
    }

    append(node) {
        let temp = this.head;
        while(temp.next) {
            temp = temp.next;
        }

        temp.next = node;
    }

    pop() {
        if(this.head.next === null) return undefined;

        let temp = this.head.next;
        let previous = this.head;
        while(temp.next) {
            previous = temp;
            temp = temp.next;
        }
        previous.next = null;
        return temp;
    }
}

class Stack3 {
    constructor() {
        this.items = new LinkedList();
    }

    push(element) {
        this.items.append(element);
    }

    pop() {
        return this.items.pop();
    }
}


function decimalToBinary(decimalNumber) {
    const remainderStack = new Stack();
    let rem ;
    let binaryString = '';

    while(decimalNumber) {
        remainderStack.push(Math.floor(decimalNumber % 2));
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    while(!remainderStack.isEmpty()) {
        binaryString += remainderStack.pop();
    }

    return binaryString;
    
}

console.log(decimalToBinary(16));

