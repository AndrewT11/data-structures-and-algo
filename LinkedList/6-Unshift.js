class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
       if(!this.head) return undefined
       let temp = this.head
       let pre = this.head
       while(temp.next) {
           pre = temp
           temp = temp.next
       }
       this.tail = pre
       this.tail.next = null
       this.length--
       if(this.length === 0) {
           this.head = null
           this.tail = null
       }
       return temp
   }

   unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head; //point newNode.next to current head so we have reference point.
            this.head = newNode; // then we make newNode the head because newNode.next is now pointing at the current head, so we can make newNode the new head.
        }
        this.length++; // Linked List is getting longer as we added an item to the front
        return this; //once again, this refers to the Linked List, so we are returning the complete linked list
   }

}

const newLinkedList = new LinkedList(11);
newLinkedList.push(3);
newLinkedList.push(23);
newLinkedList.push(7);
newLinkedList.unshift(4);