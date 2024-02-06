// TypeScript - ReadOnly
// TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface.

// Prefix readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed. Since read-only members cannot be changed outside the class, they either need to be initialized at declaration or initialized inside the class constructor.


interface IEmployee {
    readonly empCode: number;
    empName: string;
}

let empObj: IEmployee = {
    empCode: 1,
    empName: "Steve"
}

empObj.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'