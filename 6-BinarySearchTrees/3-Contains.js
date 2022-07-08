class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true) {    
            if(newNode.value === temp.value) return undefined;
            if(newNode.value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp= temp.left;
            }

            if(newNode.value > temp.value) {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        // if root is null, there are no numbers inside the tree, so you will not find the value you want
        if(this.root === null) return false;
        let temp = this.root;
        // this while loop will cycle through your tree, going left or right until it finds the value and returns true.
        while(temp) {
            // move left if value is smaller than temp
            if (value < temp.value) {
                temp = temp.left
            // move right if value is greater than temp
            } else if(value > temp.value) {
                temp = temp.right
            // if value = temp.value, then return true. The value you were searching for was contained inside of the binary tree
            } else {
                return true
            }
        }
        // at this point, you have gone correctly through the binary tree. temp.value = null if you have not matched the value to temp.value, the value is not inside the binary tree, thus a temp = null will return false, similar to if this.root = null.
        return false;
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