**_Stack Intro_**

Think of a can of tennis balls. Remove balls and add one at a time.

- When adding to a stack, call it pushing.
- popping is removing
- push and pop are LIFO, last in, frst out
- browser history with back and forward buttons is calling the stack
- common way of implementing stack is using an array.
- add and remove from same end

remember, for arrays:
O(1) if you are taking from the back of the stack
O(n) if you are taking from the beginning of the stack

Unlike an array, when you create a stack with a linked list:

- ALWAYS USE LEFT SIDE OF THE LINKED LIST AS THE TOP.
- NULL TERMINATED END WILL BE AT THE BOTTOM, SHOULD NOT BE AT THE TOP
- to remove the end item of a linked list is O(n), to add back to the end of linked list is O(1)
- to add and remove at the beginning of a Linked List is O(1) for both operations

for stacks, instead of Head and Tail:

- Top = Head;
- Bottom = Tail; // null end, but we won't use it for these examples

**_Queue Intro_**
When in line, you are enqueue.
When you remove someon from line, dequeue.
FIFO - first in first out

- For arrays, you will need to add to one end and remove from the other end. You will always have both an O(1) and O(n) operation for arrays

- For Linked Lists, you want to enqueue and dequeue at O(1).
- If you LL-push, O(1), but LL-pop is O(n)
- For LL-shift and LL-unshift, both operations are O(1)
- So, we want two O(1) operations, so we will need to push at the null end, and shift at the top to keep full operation O(1);
  --- Enqueue at the bottom and dequeue from the top.
