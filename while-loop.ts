
// TypeScript - while Loop
// The while loop is another type of loop that checks for a specified condition 
// before beginning to execute the block of statements. The loop runs until the condition
//  value is met.

// Syntax:
// while (condition expression) {
//     // code block to be executed
// }


let i: number = 2;

while (i < 4) {
    console.log("Block statement execution no." + i)
    i++;
}


// ......................................
var num: number = 5;
var factorial: number = 1;

while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("The factorial  is " + factorial); 