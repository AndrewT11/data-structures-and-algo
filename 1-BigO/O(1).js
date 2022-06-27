// No matter what n is, the number of operations will always be constant.  Thus:
// O(1)

// Also referred to as constant time

// This is the most efficient Big O. It was a horizontally straight line

function addItem(n) {
    let addEm = n + n + n; // does not matter if its one operation (n + n), 2 operations ( n + n + n), etc, the function will always be constant with the number of operations one function is set.
    console.log(addEm)
    return addEm;
}

addItem(20);