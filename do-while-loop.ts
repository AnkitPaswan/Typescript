// do..while loop
// The do..while loop is similar to the while loop, except that the condition 
// is given at the end of the loop. The do..while loop runs the block of code
//  at least once before checking for the specified condition. For the rest of the 
// iterations, it runs the block of code only if the specified condition is met.

// Syntax:
// do {
// // code block to be executed
// }
// while (condition expression);



let i: number = 2;
do {
    console.log("Block statement execution no." + i)
    i++;
} while (i < 4)

// ..........................................................

var n: number = 10;
do {
    console.log(n);
    n--;
} while (n >= 0); 