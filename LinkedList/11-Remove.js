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
         if(index < 0 || index > this.length) return false
         if(index === this.length) return this.push(value)
         if(index === 0) return this.unshift(value)
         
         const newNode = new Node(value)
         const temp = this.get(index - 1)
         newNode.next = temp.next
         temp.next = newNode
         this.length++
         return true
     }

     remove(index) {
        if(index < 0 || index > this.length) return undefined;
        //remove from beginning of list, just use shift
        if(index === 0) return this.shift()
        //remove from end of list, just use pop
        if(index === this.length -1) return this.pop()

        // We will have before point to the index of the item right before the item we want to remove. After this, we have temp become before.next, which is the item we want to remove.
        const before = this.get(index -1)
        const temp = before.next;

        // to have before ignore temp, we now make before.next point to temp.next and not temp, thus we just broke the chain. Temp is only attached by its next, which we set to null. Now, Temp is floating by itself. We decrement by one and return the value we removed from the Linked List.
        before.next = temp.next;
        temp.next = null;
        this.length--
        return temp;
     }

}
 
let myLinkedList = new LinkedList(11)
myLinkedList.push(3)
myLinkedList.push(23) 
myLinkedList.push(7) 