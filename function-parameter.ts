// Function Parameters
// Parameters are values or arguments passed to a function. In TypeScript, 
// the compiler expects a function to receive the exact number and type of
//  arguments as defined in the function signature. If the function expects three parameters, 
// the compiler checks that the user has passed values for all three parameters i.e. 
// it checks for exact matches.

function Greet(greeting: string, name: string): string {
    return greeting + ' ' + name + '!';
}

Greet('Hello', 'Ankit');//OK, returns "Hello Ankit!"
Greet('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
Greet('Hi', 'Ankit', 'Paswann'); //Compiler Error: Expected 2 arguments, but got 3.