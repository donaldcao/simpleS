class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 1;
        this.items = {};
    }

    enqueue(element) {
        this.items[++this.count] = element;
    }

    dequeue() {
        if(this.isEmpty()) return undefined;
        let item = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        this.count--;
        return item;

    }

    peek() {
        if(this.isEmpty()){
             return undefined;
        }
        return this.items[this.lowestCount];
    }

    clear() {
        this.items= {};
        this.count =0;
        this.lowestCount = 1;
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    toString() {
        if(this.isEmpty()) return '';

        let objString = `${this.items[this.lowestCount]}`;
        for(let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[this.lowestCount+i]}`;
        }

        return objString;
    }


}