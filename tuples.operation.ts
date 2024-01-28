// Tuple Operations
// Tuples in TypeScript supports various operations like pushing a new item, removing an item from the tuple, etc.

var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push " + mytuple.length)
console.log("Items before pop " + mytuple.length)
console.log(mytuple.pop() + " popped from the tuple") // removes and returns the last item

console.log("Items after pop " + mytuple.length)

// The push() appends an item to the tuple

// The pop() removes and returns the last value in the tuple


var mytuple = [15, "Hello", "World", "typeScript"]; //create a  tuple 
console.log("Tuple value at index 0 " + mytuple[0])

//update a tuple element 
mytuple[0] = 315
console.log("Tuple value at index 0 changed to   " + mytuple[0])

// Destructuring a Tuple
// Destructuring refers to breaking up the structure of an entity. TypeScript supports destructuring when used in the context of a tuple.


// var a =[10,"hello"] 
// var [b,c] = a 
// console.log( b )    
// console.log( c )

// OR

var a = [10, "hello"]
var b = a[0], c = [1];
console.log(b)
console.log(c)


var employee: [number, string] = [1, "Ankit"];

// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Paswan");
console.log(employee); //Output: [1, 'Steve Jobs']


export { }