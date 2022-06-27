// O(log n). Not as flat as O(1), but very flat.

// Divide and conquer. This must be done with a sorted array. 

// Imagine we are trying to find the number 1 in the following array:
// [1, 2, 3, 4, 5, 6, 7, 8]

// We will split the array in half and see if we have the number. If we don't, split it again. Then again until we find our number.
// Worst case scenario here would be 3 splits.

// 2^3 = 8. log(2)8 = 3 

// Advantage really comes with arrays that are large. An array with over a billion numbers can be found in 31 operations, worst case.

