function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;

    while(i < array1.length && j < array2.length) {
        if (array[i] < array[j]) {
            combined.push(array[i]);
            i++;
        } else {
            combined.push(array[j]);
            j++;
        }
    }

    while( i < array1.length) {
        combined.push(array[i]);
        i++;
    }

    while( j < array2.length) {
        combined.push(array[j]);
        j++;
    }
    return combined
}

function mergeSort(array) {
    // no need to sort an array that only has one item. it is sorted
    if(array.length === 1) return array

    // makes divided number into whole number
    let mid = Math.floor(array.length/2)

    // creating two new arrays, one for the left side of array and one for left side of array. This is to break the array in half.
    let left = array.slice(0, mid)
    let right = array.slice(mid)

    // mergeSort will continue to break the arrays in half until the base case occurs (one item in the array)
    return merge(mergeSort(left), mergeSort(right))
}

mergeSort(merge([1,3,8,7], [2,4,5,6])
)

// mergeSort([3,1,4,2])