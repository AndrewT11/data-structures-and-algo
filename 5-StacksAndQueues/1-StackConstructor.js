// class Node is identical to a Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// difference between Linked List and Stack is this.top = this.head and there is no this.tail (this.bottom but we aren't using it)
class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode
        this.length = 1;
    }
}

let myStack = new Stack(11);