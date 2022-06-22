// Intro to Pop - O(n)
// 1) Remove item
// 2) have tail point towards Node that is now at the end of the list.
// Edge Cases: 
// 1) Once again, what if there are no node to pop off? Both pointers will be pointing at null
// 2) If we only have 1 item 

// pop is where we need to use pre and temp
// pre will always be the node before the last node. Temp should be the last node. At the end of the day, temp should be the tail if there are nodes.

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
        this.length++;
        return this; // this will return the entire Linked List
    }

    pop() {
        // if no nodes in Linked List
        if(!this.head) {
            return undefined;
        }
        
       let temp = this.head;
       let pre = this.head;
       
        // if more than one node in Linked List. This can only occur if there is a node after the node temp is pointing at.

        // we can also use a for loop here, using this.length to end the for loop. using a While loop will return null or flase when temp.next has no next, so we can end the loop when next = null
        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null; //this will remove the last item
        this.length--;

        // if we only have 1 item in Linked List. There is nothing in the list, thus head and tail must both be null.
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp; // returning temp is returning the item we popped off. Remember, this is a pop. If you want the Linked List, console.log linked list. When you call for pop, you want to know what you had popped off, thus returning temp, which is going to be your tail.
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2)
console.log("Two Items: ", myLinkedList);
myLinkedList.pop();
console.log("One Items: ", myLinkedList)
myLinkedList.pop();
console.log("Zero Items: ", myLinkedList)
