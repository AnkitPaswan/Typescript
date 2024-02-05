
// Constructor
// The constructor is a special type of method which is called when creating an object. In TypeScript, the constructor method is always defined with the name "constructor".

// class Employee {

//     empCode: number;
//     empName: string;

//     constructor(empcode: number, name: string) {
//         this.empCode = empcode;
//         this.empName = name;
//     }
// }


// Creating an Object of Class
// An object of the class can be created using the new keyword.

// class Employee {
//     empCode: number;
//     empName: string;
// }

// let emp = new Employee();

class Employee {

    empCode: number;
    empName: string;

    constructor(empcode: number, name: string) {
        this.empCode = empcode;
        this.empName = name;
    }
}

let emp = new Employee(100, "Steve");

export { }


