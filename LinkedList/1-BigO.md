imagine a Linked List as follows:

Head Tail
11, 3, 23, 7

To add 4 to this list, we just need to have the last item point to the Node, then make the tail equal that last Node and it is added to the linked list. Doesn't matter how many items it has. The number of steps will always be the same. It is constant.

Head Tail
11, 3, 23, 7, 4

O(1)

Removing the 4 is a different matter. We now need to make the variable tail equal to something pointing at the 7 Node and only 23 is pointing at 7. WE CAN'T GO BACKWARDS ON A LINKED LIST! We will need to itirate through the linked list from the beginning to get to the 7, then set tail equal to that pointer.

O(n)

If we wanted to add 4 to the front of the Linked List, we can see that we already have the variable head pointed at the 11. Thus, we set node 4 equal to head and this places the 4 at that node.

O(1)

Removing from the beginning is also O(1). 4 is already pointing at 11. And we just need to slide variable head over. head.next ( we will learn about this more later )

to insert, we need to iterate from the head to the value that would point at the "index" you want it at. Then, you must make the 4 equal to what is point at the position. That is 23. 4 will now point at 7 and 23 will point at 4.
O(n)

to remove, we need to iterate through the list to find the piece we want to remove. If it is 4, we will set the 23 pointer to the 4 pointer.
O(n)

for finding values (either through value or index), it will be an O(n) event. You will need to start from the head and iterate through the entire list until you come upon the value or index you are looking for. This is where an array would shine.
