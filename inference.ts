
// TypeScript can infer the types of properties based on their values.
// TypeScript type inference is a feature that allows the TypeScript compiler to 
// automatically deduce the type of a variable or expression. 
// This means that you do not have to explicitly specify the type of every 
// variable and expression in your code.


const car = {
    type: "Toyota",
};
car.type = "Ford"; // no error
car.model = 2015; // Error: Type 'number' is not assignable to type 'string'.

console.log(car.type) // output : Ford


export { }