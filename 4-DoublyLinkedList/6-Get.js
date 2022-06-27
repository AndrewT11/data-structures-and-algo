class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let temp = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    unshift(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;

    }
    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;

    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;

        // because this is a doubly linked list, we can move both directions, thus you do not need to iterate through the entire list. thus, if index is smaller than this.length/2, its faster to start at the head to reach the index. And if your index is larger than this.length/2, it is faster to start at the tail of the list to reach the index.
        if (index < this.length/2) {
            for(let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            // we are making i the final index, as long as i is BIGGER than index, we will cotinue to move backwards from temp to temp.prev and decrement i by 1. Once we reach the same index, for loop will stop and return the current temp we are at.
            for(let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.push(1)
myDoublyLinkedList.push(2)   
myDoublyLinkedList.push(3)   