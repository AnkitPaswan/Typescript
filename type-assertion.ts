
// In Typescript, Type assertion is a technique that informs the compiler about the type of a variable. Type assertion is similar to typecasting but it doesn’t reconstruct code. You can use type assertion to specify a value’s type and tell the compiler not to deduce it. 
// When we want to change a variable from one type to another such as any to number etc, 
// we use Type assertion. 

// We can either use <> angular brackets or as keywords to do type assertion. 
// When we migrate code from typescript to another language type assertion comes into play.
//  Runtime support comes with typecasting, whereas type assertion has no effect on runtime. 
// It is used by the compiler. 


// Type assertion using syntax
let str: string = "ankitpaswan";
console.log(str);

let len: number = (str as string).length;
console.log(len);


// Type assertion using <> angle brackets syntax

let num: any = 77;

// Conversion from any to number 
let num1 = <Number>num;

console.log(num1);
console.log(typeof num1);


// Type Assertion with Object
interface Employee {
    name: string;
    code: number;
}

let employee = <Employee>{};
employee.name = "arjun"; // OK
employee.code = 123; // OK
console.log(employee.name)