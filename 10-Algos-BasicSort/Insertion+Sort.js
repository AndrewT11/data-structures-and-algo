function insertionSort(array) {
    let temp;
    // always start off at the second number
    for(let i = 1; i < array.length; i++) {
        temp = array[i];
        for(let j = i - 1; array[j] > temp && j > -1; j--) {
            // switch value of array[j+1] to value of array[j]
            array[j+1] = array[j];
        }
        // switch value of larger index to value of temp
        array[j+1] = temp;
    }
    return array;
}

insertionSort([4,2,6,5,1,3])
