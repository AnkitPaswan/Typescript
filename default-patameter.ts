// Function parameters can also be assigned values by default. However, 
// such parameters can also be explicitly passed values.

// Syntax
// function function_name(param1[:type],param2[:type] = default_value) { 
// }

function Greet(name: string, greeting: string = "Hello"): string {
    return greeting + ' ' + name + '!';
}

console.log(Greet('Ankit'));//OK, returns "Hello Ankit!"
console.log(Greet('Ankit', 'Hi')); // OK, returns "Hi Ankit!".
console.log(Greet('Arjun')); //OK, returns "Hello Arjun!"