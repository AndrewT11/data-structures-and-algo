class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
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
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
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
        let temp = this.head;// to remove an item, you must have something pointed to it. Making temp = this.head allows temp to point at the item we want to remove, which is the first item in the list. 
        this.head = this.head.next // We then move head to head.next because the previous head, which is temp, will be removed when we do the shift method
        temp.next = null //this will break temp from the Linked List. The shift right here.
        this.length--
        if(this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
}

const newLinkedList = new LinkedList(11);
newLinkedList.push(3);
newLinkedList.push(23);
newLinkedList.push(7);
newLinkedList.unshift(4);
console.log(newLinkedList);
newLinkedList.shift();
console.log(newLinkedList);


