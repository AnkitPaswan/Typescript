
// In TypeScript, Symbol is a primitive data type. So, we need to use it as a type only, but we can also use it as literals using the ‘unique symbol’. The symbol includes the unique symbol, which means the unique symbol is a subtype of the symbol.

// We can use the unique symbol with only const variables and readonly properties. If we want to reference the specific symbol type to another variable, we can use the ‘typeof’ operator.

// Syntax
// Users can follow the syntax below to use the symbol as a literal using the unique symbol.

// const test_symbol: unique symbol = Symbol();
// let symbol3: typeof test_symbol = test_symbol;
// class C {
//     static readonly symb: unique symbol = Symbol("unique symbol");
// }

//Example

// here, we used the unique symbol to define the type of the sym1.
const test_symbol: unique symbol = Symbol();

// we can't reference the unique symbol to the let type of variable
// let sym2: unique symbol = Symbol();

// to reference the symbol type to the variables declared with the let keyword, using the typeof operator.
let symbol1: typeof test_symbol = test_symbol;
console.log("The value of symbol1 is " + typeof test_symbol);

// referencing the unique symbol to the static class property
class C {
    static readonly symb: unique symbol = Symbol("unique symbol");
}