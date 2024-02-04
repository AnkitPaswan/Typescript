// Implementing an Interface
// Similar to languages like Java and C#, interfaces in TypeScript can be implemented with a Class. The Class implementing the interface needs to strictly conform to the structure of the interface.

interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (empCode: number) => number;
}

class Employee implements IEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode: number): number {
        return 20000;
    }
}

let emp = new Employee(1, "Steve");

console.log(emp)