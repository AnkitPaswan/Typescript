// Interface extends Class
// An interface can also extend a class to represent a type.

class Person {
    name: string;
}

interface IEmployee extends Person {
    empCode: number;
}

let emp: IEmployee = { empCode: 1, name: "James Bond" }