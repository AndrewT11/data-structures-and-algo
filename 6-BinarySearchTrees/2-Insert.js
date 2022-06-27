class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root= null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        // while(true) will have the loop comtinue to run until we hit a return statement. Return statements only occur when we have mad the new node a terminal node on the tree. There are no return statements as the node traverses the binary tree
        while(true) {
            // if the value of the newNode is the same as a node inside the list, return undefined,
            if(newNode.value === temp.value) return undefined;
            
            // this will be resposible for everything on the left side. 
            // similar to pop in LL, we need to iterate through the list, checking to see if the next node is smaller or bigger than the temp node we are currently at. Once we have gone through the binary tree plinko style, eventually we reach a null node. When this null node is reached, newNode is added to the tree by making the connection temp.left (temp.right) = newNode;
            if(newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;

                // if newNode.value > temp.value, then...
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this;
                }
                temp = temp.right;
            }
        }
    }
}

let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)

myTree.insert(52)
myTree.insert(82)