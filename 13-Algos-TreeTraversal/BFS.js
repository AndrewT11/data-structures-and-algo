class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root
        while(true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;
        let temp = this.root
        while(temp) {
            if (value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false
    }

    BFS() {
        let currentNode = this.root;
        let results = [];
        let queue = [];
        queue.push(currentNode)

        // this will run as long as we have items we can push into the queue as we go through the BST
        while(queue.length) {
            // shift the item in queue
            currentNode = queue.shift();
            // place that item value into the results[]
            results.push(currentNode.value);
            // place any items to the left or right of the former item into the queue[]
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        // this is returning the results[]
        return results
    }
}

let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

// [47, 21, 76, 18, 27, 52, 82]