class Node {
    // because these are objects, there needs to be something pointing to them, or else they will be garbage collected.
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
 
    // root is null to create the framework for the binary tree. Use insert method to make root become the first node created
    constructor() {
        this.root = null;
    }
}

let myTree = new BST();
myTree;