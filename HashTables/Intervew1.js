// this is an O(n^2) operation. Inefficient but gets teh job done.

let array1 = [1, 2, 5]

let array2 = [2, 4, 5]

function itemsInCommon(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i])
            }
        }
    }
}


// this is a more efficient method of O(n).

function itemsInCommon (arr1, arr2) {
    let object = {};

    for(let i = 0; i < arr1.length; i++) {
        object[arr1[i]] = true;
    }

    for(let j = 0; j < arr2.length; j++) {
        if(object[arr2[j]]) return true;
    }
    return false;
}

itemsInCommon(array1, array2);
