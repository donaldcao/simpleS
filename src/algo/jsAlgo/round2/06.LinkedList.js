
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.count = 0;
    }

    push(element) {
        let newNode = new Node(element);
        if(!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }

        this.count ++;
    }

    removeAt(index) {
        if(index <0 || index > this.count) return;

        let temp = this.head;
        let previous
        if(index === 0) {
            this.head.next = this.head.next.next;
        }

    }
}