function factorial(n) {
    if(n === 1) return 1;
    return n* factorial(n-1);
}

factorial(4);

// 4! = 4 * 3 * 2 * 1
// 4 * 3!
//     3 * 2!
//         2 $ 1!
//             1
// 1 is the base case
// We are recursively calling factorial as n changes from 4 to 3 to 2 to 1, factorial(n) will run until n = 1, which will happen after 4 calls of factorial(n), 3 recursively