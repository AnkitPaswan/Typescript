
// Optional Parameters
// TypeScript has an optional parameter functionality. The parameters that may or
//  may not receive a value can be appended with a '?' to mark them as optional.

//  Note:
// All optional parameters must follow required parameters and should be at the end.

function Greet(greeting: string, name?: string): string {
    return greeting + ' ' + name + '!';
}

Greet('Hello', 'Ankit');//OK, returns "Hello ANkit!"
Greet('Hi'); // OK, returns "Hi undefined!".
Greet('Hi', 'Ankit', 'Paswan'); //Compiler Error: Expected 2 arguments, but got 3.