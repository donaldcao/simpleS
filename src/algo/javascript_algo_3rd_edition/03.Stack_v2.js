
class Stack{
    constructor() {
        this.items = {};
        this.count = 0;
    }

    push(item) {
        this.items[this.count] = item;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count-1];
    }

    clear() {
        // this.items = {};
        if(!this.isEmpty()) {
            this.pop();
        }
        this.count = 0;
    }

    toString(separator) {
        separator = separator ? separator : ' ';
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++) {
            objString = `${objString}${separator}${this.items[i]}`;
        }

        return objString;
    }
}

var stack = new Stack();
stack.push(100);
stack.push(20);
stack.push(39);
stack.push(100);
stack.push(20);
stack.push(39);
stack.push(100);
stack.push(20);
stack.push(39);
stack.push(100);
stack.push(20);
stack.push(39);

console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.toString('-'));