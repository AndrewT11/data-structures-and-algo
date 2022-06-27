**_TREE_**

Linked Lists are forms of trees that don't fork.

Binary trees have two arrows, one pointing left and one pointing right

- Full Tree - each node either points to two nodes or zero nodes

- Perfect Tree - each line that has items in it is completely filled all the way across.

Perfect 1 -2 - 4 - 8
vs
1 -2 - 4 - 6

There will be one node that does not split into two, thus the final line of the tree is not completely filled all the way across

- Complete Tree - A tree in which every level, except possibly the last, is entirely filled.
  1 - 2 - 4 - 8 is full, perfect and complete
  1 - 2 - 4 - 6 is full and complete
  1 - 2 - 4 - 5 is complete only
  1 - 2 - 3 -5 is none of the above

Each child can only have ONE parent in a tree

Nodes without any children are called leaves. Each node being called a leaf.

BINARY SEARCH TREE EXAMPLE

Original Node = All Nodes bigger are linked right, all smaller linked left.

- this will continue as nodes are added. First, compare added node to original root node. If smaller(left) or bigger(right), move to appropriate direction
- then, compare to next node. If smaller(left) or bigger(right), move to appropriate direction
- this will form the tree with increasingly smaller nodes to the left and increasingly larger nodes to the right of the tree

**_BIG O for Binary Trees_**
O(log n) - divide and conquer. Pretty efficient

How many lines must you traverse to find the number? Each line is a step you must search through.

- If a tree does not break into left or right, but continues on (imagine each node is increasingly bigger than before, thus there is no "left" fork), you basically have a linked list at this point. O(n) is worst case scenario. But, we view Binary trees as O(log n), even with worst case being O(n):
  \*Note these situations are for a certain value. You do not know the index or position of the value you are searching for. Important for the remove() as you need to itterate through the list.
- lookup(): Binary Tree O(log n) vs O(n) (LL or array)
- insert(): Linked List or Array O(1)
- remove(): Binary Tree O(log n) vs O(n) (LL or array)
