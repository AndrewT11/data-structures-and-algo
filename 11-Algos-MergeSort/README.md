- Overview

  - first sorting algorithm in which we will be using recursion
  - take an array and continue cutting it in half until we have single item arrays
    - then you will take them and combine them into bigger sorted arrays
      - continue to combine the larger sorted arrays and make bigger sorted arrays

- Merge Intro

  - Merge is a helper function that we will use in MergeSort
  - Two sorted arrays that we will put into one big sorted array
    Steps:
    - Compare i with j in two separate arrays.
    - Begin at beginning with two items of each array compared, smaller goes to new array
    - move onto next item of array 1 and compare again to item of array 2. Smaller gets pushed to the new array. Continue on
    - Once an array gets to zero items, we will break out of the loop
    - For items left in the last array, we will create another loop that states while items are in that array, push all those items into new combined array until original array is empty.
    - We will do the same for the other array.

- Merge Sort
  1. Breaks arrays in half
  2. Base case: When array.length = 1
  3. Uses merge() to put arrays together

**_Big O_**

- space complexity: O(n). Originally had 8 items and you need to create 8 new items
- time complexity: O(n log n). Breaking apart is O(n). Putting back together is O(log n) as we need to sort through each array before merging them
