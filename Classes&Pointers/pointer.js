let num1 = 5;
let num2 = num1;

num1 = 10;

//If we console.log num1 and num2 at this point, num1 = 10, num2 = 5. We did not use a pointer here.

// Pointers
let obj1 = {
    value: 11
}
let obj2 = obj1;
// obj1 = { value: 11 }
// obj2 = { value: 11 }

obj1.value = 12;
// obj1 = { value: 12 }
// obj2 = { value: 12 }

// In this case, obj2 is pointing at the object obj1 is pointing at. We are not making a copy of the object of object 1. Thus, data can change inside the object, but we will still be pointing only at the object and not its value inside. So we can pull out changing information.

let obj3 = { value: 57 }

// if this is done, all 3 objects will be pointing at the object obj3 is pointing at. Nothing will point at the first object with a value of 11. You cannot access that object anymore. It is now taking up memory and not being used. Periodically, Javascript will run a process called Garbage Collection and remove the object that is not being used. (What Jon was always talking about)
obj2 = obj3
obj1 = obj2