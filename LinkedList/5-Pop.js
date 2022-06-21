// Intro to Pop - O(n)
// 1) Remove item
// 2) have tail point towards Node that is now at the end of the list.
// Edge Cases: 
// 1) Once again, what if there are no node to pop off? Both pointers will be pointing at null
// 2) If we only have 1 item 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    // create first node in a Linked List. Head and Tail will point towards the first newNode.
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length--;
        return this;
    }

    pop() {
        // if no nodes in Linked List
        if(!this.head) {
            return undefined;
        }
        // if more than one node in Linked List
       let temp = this.head;
       let pre = this.head;

        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        // if we only have 1 item in Linked List. There is nothing in the list, thus head and tail must both be null.
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2)
console.log("Two Items: ", myLinkedList);
myLinkedList.pop();
console.log("One Items: ", myLinkedList)
myLinkedList.pop();
console.log("Zero Items: ", myLinkedList)
