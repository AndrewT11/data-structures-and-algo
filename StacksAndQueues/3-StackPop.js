class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.next = null;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.top) return undefined;
        if(this.length === 1) {
            this.top = null;
        } else {
            let temp = this.top;
            this.top = this.top.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

let myStack = new Stack(7)
myStack.push(23)
myStack.push(3)
myStack.push(11)
