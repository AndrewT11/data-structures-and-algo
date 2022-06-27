function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 
     for(let k = 0; k < n; k++) {
         console.log(k)
     }
 }
 
 logItems(10)

 // this will be O(n^2) and O(n), added together is O(n^2 + n).
 // We drop non-dominant because comparatively, n is insignificant, thus, the Big O notation for this code is:
 // O(n^2). We drop non-dominant.