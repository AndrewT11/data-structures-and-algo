- Recursion Intro

* A function that calls itself... until it doesn't.
* Ex:
  function openGiftBox() {
  if(isBall) return ball;
  openGiftBox();
  }
  openGiftBox() function will run again and again until there is a ball and we are returned out of the function. The function is calling itself
* the process of opening each new box is the same
* Each time we open the box, we make the problem smaller
* Base Case - in the example above, a ball being returned is the base case.
* Recursive Case - another box inside the box is the recursive case. It will make the function call itself again.
* if you do not include the Base Case, the Recursive function will call itself over and over again because there is no way to return out of the Recursive Case.
  - This is an infinite loop called a Stack Overflow
