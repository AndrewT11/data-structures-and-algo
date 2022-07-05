function bubbleSort(array) {
    // setting up the number of times we will go through the loop. We are using array.length - 1 because the amount of comparisons will always be one less than amount of numbers
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j+1];
                array[j] = array[j+1];
                array[j + 1] = temp
            }
        }
    }
    return array;
}

bubbleSort([4,2,6,5,1,3])