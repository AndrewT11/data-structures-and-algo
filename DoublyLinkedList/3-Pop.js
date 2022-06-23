class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.tail = null;
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
        // if(this.length === 0)
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

    // this will read as 1) if zero items in list, do this, 2) if 1 item in list, do this, or do else statement for everything else.
    pop() {
        if(this.length === 0) return undefined;
        let temp = this.tail; //temp will be what is popped off
        // once popped, a single item list will have no items, thus this.head and this.tail = null
        if(this.length === 1) { 
            this.head = null;
            this.tail = null;
        } else {
            // since we have temp pointed at this.tail, we make this.tail = prev. Now we can make this.tail.next = null, thus breaking temp from one direction. this.temp.prev = null breaks the link from the other reverse direction, leaving temp by itself.
            this.tail = this.tail.prev
            this.tail.next = null;
            this.temp.prev = null;
        }
        this.length--       
        return temp;  
    }
}