// Step by steps of pushing
// 1) create a new Node
// 2) have last node in linked list point towards new Node
// 3) have tail variable point to new Node

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const newNode = new Node(4);

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode; 
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
    
        // if statement asking if head is pointed to nothing or null, which is why we use the not operator (!). If head is not pointing at anything, that must mean tail is not pointing at anything, aka they are both pointing to null. Thus, if head is not pointing at anything, make both pointers point at the newNode that was created. 
    
        if(!this.head) /** checking to see if linkedlist is empty */ {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // this.tail means current Node. tail.next currently equals null. You are telling JS that next should equal the newNode created.
            this.tail = newNode; // here, we are telling the variable tail that it now is pointing at the new node created. Understand the differentiation between these two else lines of code.
        }
        this.length++;
        return this; // returning the entire linked list
    }
}

// What happens to a list that has no nodes yet? The head and tail will be pointing at null.
// Solution, as you saw in the constructor, is to have head and tail point at the same node, or have tail pointer = head pointer = new Node.



let myLinkedList = new LinkedList(7);
myLinkedList.push(4)
console.log(myLinkedList);