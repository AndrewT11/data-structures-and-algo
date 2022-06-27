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

    // only one difference between LinkedList and Doubly Linked Lists. We are defining a prev in the else statement as the link goes in two directions.
    push(value) {
        const newNode = new Node(value);

        // note the two different ways to confirm if we have an empty list or not.
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } 
        // or
        // if(!this.head) {
        //     this.head = newNode;
        //     this.tail = newNode;
        // }
        else {
            // note the order. you must point newNode.prev to this.tail before you define this.tail as newNode.If you point this.tail to the new node before pointing where newNode.prev is, there is no marking on that previous node to state what is newNode.prev
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
