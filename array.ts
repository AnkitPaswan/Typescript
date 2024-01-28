
// An array is a special type of data type which can store multiple values of different data types sequentially using a special syntax.

// TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array:

// 1. Using square brackets. This method is similar to how you would declare arrays in JavaScript.

// let fruits: string[] = ['Apple', 'Orange', 'Banana'];

// 2. Using a generic array type, Array<elementType>.

// let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

// Both methods produce the same output.

// Of course, you can always initialize an array like shown below, but you will not get the advantage of TypeScript's type system.

// let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];

// Arrays can contain elements of any data type, numbers, strings, or even objects.

// Arrays can be declared and initialized separately.
let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana'];

let ids: Array<number>;
ids = [23, 34, 100, 124, 44];



// An array in TypeScript can contain elements of different data types using
//  a generic array type syntax, as shown below.
// Multi Type Array
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// or 
let values1: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];


// Accessing Array Elements:
// The array elements can be accessed using the index of an element e.g. ArrayName[index]. The array index starts from zero, so the index of the first element is zero, the index of the second element is one and so on.

// Example: Access Array Elements Copy
let fruits1: string[] = ['Apple', 'Orange', 'Banana'];
console.log(fruits[0]); // returns Apple
console.log(fruits[1]); // returns Orange
console.log(fruits[2]); // returns Banana
console.log(fruits[3]); // returns undefined



// Use the for loop to access array elements as shown below.

// Example: Access Array Elements using Loop Copy
let fruits2: string[] = ['Apple', 'Orange', 'Banana'];

for (var index in fruits2) {
    console.log(fruits2[index]);  // output: Apple Orange Banana
}
// ----------------------------------------------------------


for (var i = 0; i < fruits2.length; i++) {
    console.log(fruits2[i]); // output: Apple Orange Banana
}