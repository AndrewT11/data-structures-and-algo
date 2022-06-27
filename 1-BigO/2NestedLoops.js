// O(n^2)
// output = n*n = n^2 = O(n^2)

function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 }
 
 logItems(3)

// TRICK QUESTION. DIFFERENT TERMS FOR INPUT. This is NOT O(n^2). 
// similarly to 2 for loops, 2 nested for loops is the same. Input values may be different, thus cannot assume n.
// O(a*b) is simplest form.

function logItems(a, b) {
    for(let i = 0; i < a; i++) {
        for(let j = 0; j < b; j++) {
            console.log(i, j) 
        }       
    } 
}