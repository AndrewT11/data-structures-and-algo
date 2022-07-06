function insertionSort(array) {
    let temp;
    // always start off at the second number
    for(let i = 1; i < array.length; i++) {
        temp = array[i];
        // var is used on purpose here so that the variable can be used out of scope.
        for(var j = i - 1; array[j] > temp && j > -1; j--) {
            // switch value of array[j+1] to value of array[j]. This slides the larger number to the right.
            // When array[j] is not greater than temp, then we will be kicked out of for loop
            array[j+1] = array[j];
        }
        // this places temp into the open spot created when we made array[j+1] = array[j] value
        array[j+1] = temp;
    }
    return array;
}

insertionSort([4,2,6,5,1,3])
