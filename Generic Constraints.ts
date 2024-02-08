// // Generic Constraints
// // As we know, the TypeScript Generics Types allows working with any and all data type. However, we can restrict it to certain types by using constraints. In the following example, we will create an interface that has a single .length property. We will use this interface, and the "extends" keyword to denote our constraint.

// // Example


// interface Lengthwise {
//     length: number;
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log("Length: " + arg.length);  // It has a .length property, so no more error found  
//     return arg;
// }
// loggingIdentity({ length: 10, value: 9 });
// loggingIdentity(3);  // Compilation Error, number doesn't have a .length property  



// Generic Constraints with class
// A more advanced example of Generic constraints relationships between the constructor function and the instance side of class types is given below.

// Example

class Student {
    Id: number;
    Name: string;

    constructor(id: number, name: string) {
        this.Id = id;
        this.Name = name;
    }
}
function display<T extends Student>(per: T): void {
    console.log(`${st.Id} ${st.Name}`);
}
var st = new Student(101, "\nVirat Kohli");
display(st);





