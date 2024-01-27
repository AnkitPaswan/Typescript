// never effectively throws an error whenever it is defined.

// Syntax
// Users can follow the syntax below to use the never type as literal for variables.
// never type as a variable literal
let variable: never;

// never type as a function return type
function func(): never {

    // write any condition such that the function shouldn't return any value
}



let variable: void = null;
let variable1: never = null;      // error 
let variable2: never = 1;         // error 
let variable3: never = "geek";     // error 
let variable4: never = true;
let variable5: never;

