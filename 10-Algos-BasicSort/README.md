- Basic Sorts

* all of the below are loops within loops, so Big O complexity is O(n^2), but there are caveats for Insertion Sort.
* All three of these sort the array in place. That means that they do not create additional copies of the array. That means it the space complexity is O(1)

- Bubble Sort:

1. Compare value of first item with second item
   - if first item is larger, have them switch places
     - repeat down the list if first number is the largest number
   - if first item is not larger, move onto second item
2. Repeat step one with new number

- Selection Sort:

* you must keep track of the indexes of the items in your array for selection sort

1. Create a min variable
2. Compare first number to second number. Store lowest number's index inside min.
3. Compare value stored in min index to next number. If number is smaller than current min, place index of smaller number as min.
4. Continue until all numbers have been sorted

- Insertion Sort:

1. always starts with the second item and compare to item before it
2. if second item is less than item before it, we switch them
3. Move to third item and compare to second item. If 3rd < 2nd. switch. If not, move onto next number. Compare that third item to the 1st item. If it is lower, switch. If not, move onto the next number.
4. repeat

BigO for Insertion Sort:

- O(n^2) is worst case
- If you only need to do one pass to sort the array, that would be an O(n) operation
