
// TypeScript Data Type - Number

// Just like JavaScript, TypeScript supports number data type.All numbers are stored as
//  floating point numbers.These numbers can be Decimal(base 10), Hexadecimal(base 16) 
//  or Octal(base 8).


// let first: number = 123; // number 
// let second: number = 0x37CF;  // hexadecimal
// let third: number = 0o377;      // octal
// let fourth: number = 0b111001;// binary  

// console.log(first);  // 123 
// console.log(second); // 14287
// console.log(third);  // 255
// console.log(fourth); // 57 


let value: number = 315;

console.log(value.toExponential(7))// Output : 3.1500000e+2
console.log(value.toFixed(2));// Output : 315.00

console.log(value.toLocaleString());// Output : 315

let myNumber: number = 10667.987;
myNumber.toLocaleString(); // returns 10,667.987 - US English
myNumber.toLocaleString('de-DE'); // returns 10.667,987 - German
myNumber.toLocaleString('ar-EG'); // returns 10667.987 in Arebic


console.log(value.toPrecision(1));// Output : 3e+2

// value.toString([radix])
// This function takes in one optional argument, a radix number representing
//  the base for which a string representation is to be returned.
//   The radix value should be between 2 and 36.
console.log(value.toString(4));// Output : '10323'
console.log(value.toString(5));// Output : '10323'
console.log(value.toString(9));// Output : '10323'
console.log(value.toString(12));
console.log(value.toString(16));


console.log(value.valueOf());// Output : 315




// Bitwise Operators
/*
* In TypeScript, bitwise operators are supported just like in JavaScript. The
* bitwise AND operator (&) is used to perform a bit by bit comparison of two
* numbers.The right operand is shifted n bits to the right and then both values
* are XORed together.If the result is non-zero,the left operand’
* corresponding bit is set to 1 otherwise it is set to zero.
*/
// let firstNumber: number = 9;
// let secondNumber: number = 7;
// let bitwiseAnd: number = firstNumber & secondNumber;
// console.log("Bitwise And Operation : " + bitwiseAnd); // prints 9
// let bitwiseOr: number = firstNumber | secondNumber;
// console.log("Bitwise Or Operation : " + bitwiseOr);    // prints 15
// let bitwiseXor: number = firstNumber ^ secondNumber;
// console.log("Bitwise XOR Operation : " + bitwiseXor);     // prints
// // 2
// let leftShift: number = firstNumber << 2;
// console.log("Left Shift Operation : " + leftShift);       // prints 36
// let signRightShift: number = firstNumber >> 2;
// console.log("Sign Right Shift Operation : " + signRightShift);         // prints 2
// let zeroFillRightShift: number = firstNumber >>> 2;
// console.log("Zero Fill Right Shift Operation : " + zeroFillRightShift);        //
// // prints 2

