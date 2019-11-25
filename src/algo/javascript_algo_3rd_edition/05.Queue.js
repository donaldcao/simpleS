class Queue{
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return result;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    isEmpty() {

    }

    size() {

    }


}