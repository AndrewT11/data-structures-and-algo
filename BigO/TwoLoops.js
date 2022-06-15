// Even though O(2n) as we get runs for 1 input. n + n . DROP THE CONSTANT
// O(n)

function logItems(n) {
     for(let i = 0; i < n; i++) {
        console.log(i) 
     }
 
     for(let j = 0; j < n; j++) {
        console.log(j) 
     }       
 }
 
 logItems(3)

//TRICK QUESTION. DIFFERENT TERMS FOR INPUT. This is NOT O(2n) = O(n).
// We can't assume a = b = n. a = 10 and b = 11 is possible. Thus:
// O(a + b)

 function logItems(a, b) {
   for(let i = 0; i < a; i++) {
      console.log(i) 
   }

   for(let j = 0; j < b; j++) {
      console.log(j) 
   }       
}