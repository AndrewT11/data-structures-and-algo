class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
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
    pop() {
        if(!this.head) return undefined;
        let temp = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            temp.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return temp;
    }
    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            temp.next = null;
            this.head.prev = null;
        }
        this.length--;
        return temp;
    }
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if(index < this.length/2) {
            for(let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            for(let i = this.length -1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    // this code is the same for Doubly LL and LL. The difference is we wrote our get method differently, attacking two sides as opposed to just attacking one side. True or false only tells you if the code changed a value or not. It does not provide any real value to the code.
    set(index,value) {
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(0)
 myDoublyLinkedList.push(1)
 myDoublyLinkedList.push(2)     