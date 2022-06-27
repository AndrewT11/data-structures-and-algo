class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
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
        if (!this.head) {
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
        return this;
    }
    get(index) {
        if(index < 0 || index > this.length) return undefined;
        let temp = this.head;
        if(index < this.length/2) {
            for(let i =0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            for(let i = this.length - 1; i > index; i--) {
                temp = temp.next;
            }
        }
        return temp;
    }
    set(index, value) {
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    // code for insert is the same as a Linked List. Difference is unshift and push methods are not the same in a Doubly Linked List.
    insert(index, value) {
        // negative and indexes greater than length will not be accpeted
        if(index < 0 || index > this.length) return false;
        // if the index = this.length, then we are inserting at a new spot, thus we can just use the push method to add the item to the Linked LIst
        if(index === this.length) return this.push(value);
        // If index === 0, we are inserting at the beginning of the list. Thus, we can just use unshift method to place item at the front of the Doubly Linked List.
        if(index === 0) return this.unshift(value);

        const newNode = new Node(value);
        const before = this.get(index-1);
        const after = before.next; // remember, get method is O(n) because we need to iterate through the list. Thus, defining after as before.next will save time and resources
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.length++;
        return true;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(3)     