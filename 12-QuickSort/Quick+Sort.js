function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp;
}

function pivot(array, pivotIndex = 0, endIndex = array.length-1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++
            swap(array, swapIndex, i)
        }
    }
    swap(array, pivotIndex, swapIndex);

    return swapIndex;
}

// we will call quickSort recursively. pivot will split the array in half, then return the Index of that pivot, which was returned as swapIndex
function quickSort(array, left=0, right=array.length-1) {
    if (left < right) {

        //this returns the pivot and is set to pivotIndex
        let pivotIndex = pivot(array, left, right)

        // once again, pivot() will be called, pivotIndex will be set
        quickSort(array, left, pivotIndex-1)
        quickSort(array, pivotIndex+1, right)
    }
    return array
}

quickSort([4,6,1,7,3,2,5])
