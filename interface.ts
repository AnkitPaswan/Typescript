// Interface is a structure that defines the contract in your application. 
// It defines the syntax for classes to follow. Classes that are derived from an 
// interface must follow the structure provided by their interface.

// The TypeScript compiler does not convert interface to JavaScript. 
// It uses interface for type checking. This is also known as "duck typing" 
// or "structural subtyping".

// An interface is defined with the keyword interface and it can
//  include properties and method declarations using a function or an arrow function.

// Declaring Interfaces
// The interface keyword is used to declare an interface. Here is the syntax to declare an interface −

// Syntax
// interface interface_name { 
// }

interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (arg0: number) => number; // arrow function
    getManagerName(arg0: number): string;
}

// ......................................
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  Object ")
console.log(employee.firstName);
console.log(employee.lastName);