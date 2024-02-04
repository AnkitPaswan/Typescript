// Extending Interfaces
// Interfaces can extend one or more interfaces. This makes writing interfaces flexible and reusable.

interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empCode: number;
}

let empObj: IEmployee = {
    empCode: 1,
    name: "Bill",
    gender: "Male"
}

console.log(empObj)