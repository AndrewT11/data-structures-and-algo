function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;

    // this will compare the first item of each array against each other, pushing the lower value into the combined array, then moving onto the next items to compare. Always the first two items as they are moved
    while(i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }

    // when we only have one array left, this will push all remaining items in those arrays into combined array. No order sorting, though.
    while(i < array1.length) {
        combined.push(array1[i]);
            i++;
    }

    while(j < array2.length) {
        combined.push(array2[j]);
            j++;
    }
    return combined
}

merge([1,3,7,8], [2,4,5,6])
