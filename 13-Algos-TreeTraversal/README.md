- Tree Traversal Intro

* Breadth First Search: Going across each line top down
* Depth First Search: Start at bottom left of tree. Basically trying to do all the left side of the tree first, whether it be at the top or bottom of the tree, we are going left to right.

**_ Breadth First Search (BFS) Intro _**
We start at the top and fill across each row

- push all of these into an array with items in the array returned in that order
- create a queue[] and results[]. Results[] will be the array we return at the end of this

1. push top Node into queue[]
2. shift the item out of queue[] and place that value into results[]. The node DOES NOT go in here, just the VALUE
3. Look at what is to the left and right of first node, push those Nodes into queue[]
4. shift left node out of array:
   a) place node value into results[]
   b) look to the item (new left node) to the left of that item (left node), push it into the queue[]
   c) look to the right of that item, push it into the queue[]
5. shift right node out of array:
   a) push node value into results[]
   b) look to the item (new left node) to the left of that item (right node), push it into the queue[]
   c) look to the right node of that item, push it into the queue[]
6. Repeat until you have reawched bottom node. Shift those nodes in queue[] and push the values intu results[]
7. return results[]

- You can rebuild this tree by taking the first value, placing the next two values as the left and right next row. Take the next 4 or less values and place them under the left and right nodes AS left and right nodes. Repeat to continue building your tree
