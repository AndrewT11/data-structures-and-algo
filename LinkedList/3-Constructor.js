// class LinkedList {
//     constructor(value)  { creates new Node}}
    
//     push(value) { creates new Node and adds to end }
//     unshift(value) { creates new Node and adds to beginning }
//     insert(index, value) { creates new Node and inserts where you want }
// }       
// Each one of these creates a new Node. That is the common denominator

// Here, we are creating a node for our linked list.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Here is our node instance we created and is waiting.
const newNode = new Node(4);

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode; // the new node we created is now the head of the linked list we are creating. Remember that an equal sign is a pointer.
        this.tail = this.head; // point tail where head is pointing at. we can also say this.tail = newNode, either way works.
        this.length = 1;
    }
}

const linkedList = new LinkedList(4); //doing this creates a newNode with a value of 4. The head and tail will be pointing to the same node. and the length wil be of length 1.
// the "new" keyword is specifically calling the constructor inthe class LinkedList.

console.log(linkedList)