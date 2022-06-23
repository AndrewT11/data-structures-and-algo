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
            this.tail = temp.prev; // or this.tail.prev
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++
        return this;
    }

    shift() {
        //if nothing there, return undefined
        if(!this.head) return undefined;
        let temp = this.head;
        //if one item, once removed, head and tail will equal null
        if(this.head === 1) {
            this.head = null;
            this.tail = null;
        // else move head to the next item
        } else {
            this.head = this.head.next;
            temp.next = null; // severe temp pointer from list
            this.head.prev = null; //severe head pointer from temp
        }
        this.length--
        return temp;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(2)
myDoublyLinkedList.push(1)