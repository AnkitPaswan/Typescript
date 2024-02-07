// The TypeScript code we write is in the global scope by default. If we have multiple files in a project, the variables, functions, etc. written in one file are accessible in all the other files.

// For example, consider the following TypeScript files: file1.ts and file2.ts

// file1.ts Copy
// var greeting : string = "Hello World!";
// file2.ts Copy
// console.log(greeting); //Prints Hello World!

// greeting = "Hello TypeScript"; // allowed

// ........................................................................

// Employee.ts

export let age: number = 20;
export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee() {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    }
}
let companyName: string = "XYZ";



