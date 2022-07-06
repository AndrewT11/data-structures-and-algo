function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp;
}

// notice the only thing you are passing in as an argument is an array. Everything else has already been set.
function pivot(array, pivotIndex=0, endIndex=array.length-1) {
    let swapIndex = pivotIndex
    for(let i = pivotIndex + 1; 1 <= endIndex; i++) {

        if (array[i] < array[pivotIndex]) {
            // move swap over one position
            swapIndex++
            // swap swapIndex and i positions
            swap(array, swapIndex, i)
        }
    }
    swap(array, pivotIndex, swapIndex)

    // returns the value of 3 for the example. It will return the index of the pivot, which is now the swap (should be located to have smaller values to left and larger values to the right)
    return swapIndex
}

pivot([4,6,1,7,3,2,5])