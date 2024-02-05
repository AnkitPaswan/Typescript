// TypeScript is object oriented JavaScript. TypeScript supports object-oriented
// programming features like classes, interfaces, etc. A class in terms of OOP is a
// blueprint for creating objects. A class encapsulates data for the object.
// Typescript gives built in support for this concept called class. JavaScript ES5 or
// earlier didn’t support classes. Typescript gets this feature from ES6.

// Creating classes
// Use the class keyword to declare a class in TypeScript.
// The syntax for the same is given below −

// Syntax
// class class_name {
//    //class scope
// }

// A class can include the following:
//  - Constructor – It is used to initialize an object created with a class.
// Properties
// Methods

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    getSalary(): number {
        return 10000;
    }
}
// console.log(Employee)

class Car {
    //field 
    engine: string;

    //constructor 
    constructor(engine: string) {
        this.engine = engine
    }

    //function 
    disp(): void {
        console.log("Engine is  :   " + this.engine)
    }
}
let objCar = new Car('V8');
objCar.disp();
console.log(objCar)
