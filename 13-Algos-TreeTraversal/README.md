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

**_ Depth First Search (DFS): PreOrder Intro _**

1. Start at top and write to the array
2. Go to the left first (if it can) and goes down the left side
3. Go back to the first previous item that has a right and write that number to array
4. Go back to the previous item before that and write that item to the array
5. Continue this until every to the left of the root node has been completed. Now go to the right, and do the same pattern, moving left first

**_ DFS Post Order Intro _**
It is similar to PreOrder, except we will write the root value to the array last

**_ DFS InOrder Intro _**
Lowest to highest from left to right. Confusing way to write that, but basically will search left until nothing is on the left, then push value to results[]. Then, the node that had left or right will psuh its value to results[], then go right, traversing left until null and pushing value into results[], then doing same thing to the right.
