

// String is another primitive data type that is used to store text data. 
// String values are surrounded by single quotation marks or double quotation marks.


// Example: TypeScript String Type Variable Copy

let studentName1: string = 'Ankit Paswan';
//OR
let studentName2: string = "Arjun Kohli";



// Template String
// Since TypeScript version 1.4, TypeScript has included support for ES6 Template strings. Template strings are used to embed expressions into strings.

// Example: Template String Pre-ES6 Copy

let studentName: string = "Ankit Paswan";
let studentDept: string = "CSE";

// Pre-ES6 
let employeeDesc1: string = studentName + " study in the " + studentDept + " department.";

// Post-ES6 
let employeeDesc2: string = `${studentName} study in the ${studentDept} department.`;

console.log(employeeDesc1);//Ankit Paswan study in the CSE department. 
console.log(employeeDesc2);//Ankit Paswan study in the CSE department.