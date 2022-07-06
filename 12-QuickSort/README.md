- Intro

  - make a pivot point
  - compare every number in the array to that pivot point
  - if number is less than pivot number, we will exchange it with the first number that is greater than pivot number from the left
  - final step is swap pivot number with the last item that has a value less than
    - everything less than pivot number should be on the left and everything ghreater than the pivot number should be on the right.
    - run quick sort on smaller and bigger numbers

**_Pivot Intro_**
Watching animation of how changes will occur.

- Pivot and Swap will both point towards first item in array.
- "i" will be pointed at item after pivot.

**_Big O _**

- Quick sort is great for random data. Not great for already sorted data.

- Space complexity: O(1). No new items needed to be created. Not teh same as Merge sort, which uses slice to create new items. Working within original array.

Time Complexity: O(n^2). For loop that goes from beginning of array to the end. Best case is O(n log n)

- If the array is already in order, there will only be items on the right.
