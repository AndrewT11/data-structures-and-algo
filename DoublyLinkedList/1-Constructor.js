// Doubly Linked Lists go forwards AND backwards, thus we have a this.next AND this.previous in our constructor for class Node, which we did not have in our LinkedList. class Node only had this.next = null; for Linked Lists

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}

// constructor for Doubly Linked List is the same as the constructor for a Linked List
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList