

// symbol are used to create a globally unique identifier.


// Syntax: Following is the syntax to create a symbol value:

Symbol()  // OR
Symbol("string")



// Creating a symbol normally 
let symbol = Symbol();
console.log(symbol);

// Creating a symbol with an optional key 
let symbol2 = Symbol("hello");
console.log(symbol2);


// / Creating the symbols
const first_sym = Symbol("ankit");
const second_sym = Symbol("ankit");

//  getting the description of the symbol
console.log("The description of the first_sym is " + first_sym.description);

// converting symbols to string
console.log("The symbol in the string is " + first_sym.toString());