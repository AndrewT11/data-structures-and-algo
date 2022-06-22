class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    get(index) {
        if(index < 0 || index >= this.length || !index) return undefined;
        let temp = this.head;
        // ALL THE FOR LOOP DOES IS MOVE TEMP FORWARD. Temp will stop moving forward once you get to the index you have requested.
        for(let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
}

let myLinkedList = new LinkedList(0)
 myLinkedList.push(1) 
 myLinkedList.push(2)
 myLinkedList.push(3)


