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
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        temp.next = null
        return temp
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined
        let temp = this.head
        for(let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    set(index, value) {
        let nodeToUpdate = this.get(index)
        if(nodeToUpdate) {
            nodeToUpdate.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        // -1 or too large of index
        if(index < 0 || index > this.length) return false;
        // if the end of the list, simply push item
        if(index === this.length) return this.push(value);
        // if you want to insert at the beginning, just unshift the value to the list
        if(index === 0) return this.unshift(value);

        //What is happening: 1) Create new Node 2) Make temp equal to the index -1 of the item you want. 3) Make newNode.next point to the same thing temp.next is pointing to. 4) Make temp.next point towards the new node. return true and insert is completed.
        const newNode = new Node(value)
        const temp = this.get(index -1);
        newNode.next = temp.next
        temp.next = newNode;
        this.length++
        return true
    }
}

let myLinkedList = new LinkedList(0)
 myLinkedList.push(2)