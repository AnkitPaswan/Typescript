
// The else…if ladder is useful to test multiple conditions. Its syntax is given below −

// Syntax
// if (boolean_expression1) {
//    //statements if the expression1 evaluates to true
// } else if (boolean_expression2) {
//    //statements if the expression2 evaluates to true
// } else {
//    //statements if both expression1 and expression2 result to false
// }


// Example: else…if ladder
var num: number = 4
if (num > 0) {
    console.log(num + " is positive")
} else if (num < 0) {
    console.log(num + " is negative")
} else {
    console.log(num + " is neither positive nor negative")
}