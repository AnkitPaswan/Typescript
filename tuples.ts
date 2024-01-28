// TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.

// Syntax
// var tuple_name = [value1,value2,value3,…value n]


// var mytuple = [10, "Hello"];
// You can also declare an empty tuple in Typescript and choose to initialize it later.

var mytuple: any = [];
mytuple[0] = 120
mytuple[1] = 234

console.log(mytuple);

var student: [number, string] = [315, "ankit"];

console.log(student);


var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];


// Accessing Tuple Elements
// We can access tuple elements using index, the same way as an array. An index starts from zero.

// Example: Accessing Tuple 
var employee1: [number, string] = [1, "Steve"];
employee[0]; // returns 1
employee[1]; // returns "Steve"