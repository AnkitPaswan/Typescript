
// Fat arrow notations are used for anonymous functions i.e for function expressions. 
// They are also called lambda functions in other languages.

// Syntax:
// (param1, param2, ..., paramN) => expression

let sum = (x: number, y: number): number => {
    return x + y;
}

console.log(sum(10, 20)); //returns 30

// .........................................

var foo = (x: number) => {
    x = 10 + x
    console.log(x)
}
foo(100)
