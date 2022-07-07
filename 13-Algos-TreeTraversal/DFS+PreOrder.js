class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
            return this
        }

        let temp = this.root
        while(true) {
            if(newNode.value === temp.value) return undefined
            if(newNode.value < temp.value) {
                if(temp.value === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
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
                temp = temp.right;
            } else {
                // if we come to match values, return true, that the value passed into contains() is inside the tree 
                return true;
            }
        }
        return false;
    }

    BFS() {
        let currentNode = this.root
        let results = [];
        let queue = [];
        queue.push(currentNode)

        while(queue.length) {
            currentNode = queue.shift();
            results.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        return results;
    }

    DFSPreOrder() {
        let results = [];
        function traverse(currentNode) {
            //push top current value
            results.push(currentNode.value)
            // begin moving down the left side, then call traverse on that left node
            if(currentNode.left) traverse(currentNode.left);
            // begin moving down the right side, then call traverse on that right node
            if(currentNode.right) traverse(currentNode.right);
        }
        // begin at the root, pushing its value into results[]
        traverse(this.root);
        //after there are no more left or right, we return the results. It will not kick out until we have no more lefts or rights because of the recursion occurring inside traverse() method.
        return results;
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

// [47, 21, 18, 27, 76, 52, 82]