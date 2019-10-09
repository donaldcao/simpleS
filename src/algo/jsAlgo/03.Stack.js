class Stack {
    constructor() {
        this.items  = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        var item = this.items.pop();
        return item;
    }

    peek() {
        var item = this.items[this.items.length -1];
        return item;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

var stack = new Stack();
stack.push(100);
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
