// Recursion and TypeScript Functions
// Recursion is a technique for iterating over an operation by having a
//  function call to itself repeatedly until it arrives at a result.
//  Recursion is best applied when you need to call the same function repeatedly 
// with different parameters from within a loop.

function factorial(num: number): number {
    if (num <= 0) {         // termination case
        return 1;
    } else {
        return (num * factorial(num - 1));     // function invokes itself
    }
};
console.log(factorial(6));      // outputs 720 
