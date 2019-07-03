

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(element) {
        let node = new Node(element);

        if(this.head == null) {
            this.head = node;
        } else {
            let current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.length ++;
    }

    insert(position, element) {

    }

    remove(element) {

    }

    indexOf(element) {

    }

    removeAt(position) {
        if( position > -1 && position < this.length) {
            let current = this.head,
            previous,
            index= 0;

            if(position == 0) {
                this.head = this.head.next;
            } else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }
            this.length--;
            return current.element;
        } else {
            return null;
        }


    }

    isEmpty(){

    }

    size() {
        return this.length;
    }

    toString() {

    }

}

var linkedList = new LinkedList();
linkedList.append(100);
console.log(linkedList.length);
linkedList.removeAt(0);
console.log(linkedList.length);