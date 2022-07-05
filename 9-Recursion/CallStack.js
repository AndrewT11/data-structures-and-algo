function funcThree() {
    console.log("Three");
}

function funcTwo() {
    funcThree();
    console.log("Two");
}

function funcOne() {
    funcTwo();
    console.log("One");
}

funcOne();

// note our console logs Three, Two, One. The function called within a function finishes its process before the next part of code is ran. Thus Three is called before Two, which is called before One.

// Think of a stack of tennis balls inside the canister. FuncOne is added first and is at the bottom. FuncTwo will be placed in the stack above funcOne() and funcThree() will be placed above funcTwo(). So funcThree must be fully performed first before the next functions are performed.

// | Three |
// | Two   |
// | One   |
// |_______|

// Make use of debugger tool step by step. 
// 1) Set a break point by clicking on the line of code that "begins" what you are trying to debug or see actions. 
// 2) Continue to click step (f9) to cycle through the code.
// 3) Look at Call Stack to see what functions have been queued and placed into the stack, waiting to be called