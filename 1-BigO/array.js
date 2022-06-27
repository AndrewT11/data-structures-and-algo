let myArray = [11, 3, 23, 7];

// push and pop are O(!) operations. No re-indexing is occuring. 
myArray.push(17); // [11, 3, 23, 7, 17]
console.log(myArray)

myArray.pop(); // [11, 3, 23, 7]
console.log(myArray)

// When 11 is popped off, it's index of 0 is gone. Thus, each item in the array must be re-indexed. 
// O(n)
myArray.shift(); // [3, 23, 7]
console.log(myArray)

// All numbers must be re-indexed to have 11 be at index position 0. 
// O(n)
myArray.unshift(11); //[11, 3, 23, 7]
console.log(myArray)

// If you have huge arrays, this is a lot of re-indexing.
// O(n). n is the number of items in the array.

// O(1) is for the end of the array. Because no re-indexing. All positions stay the same if the last item is pushed or popped.
// O(n) is for the start of the array. Because each item must be re-indexed when shifted or unshifted out of the first position.

// splice, in this example, must re-index a portion of the array.
//Remember: Is this O(3/4n)? Big O ALWAYS measures worst case. Also, DROP CONSTANTS.
// O(n). 
myArray.splice(1, 0, "hi");  //[11, hi, 3, 23, 7]
console.log(myArray)

myArray.splice(1, 1)
console.log(myArray)

// Pure notes. Search by value (7) is an O(n) operation, as you are going through the array one by one to find the search value.
// Search by index is O(1) as you can save the exact spot in memory to retrieve that piece of data. This is one advantage of ARRAYS.

// The Big Thing about Data Structures. What are you using it for? 
// - If you need to access things by index, ARRAYS. 
// - If you are adding or removing data from the beginning of the array, this is a weak point.