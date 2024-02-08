// Multi-type variables
// In TypeScript Generics, we can define multi-type variables with a different name. We can understand it with the following example.

function displayDataType<T, U>(id: T, name: U): void {
    console.log("DataType of Id: " + typeof (id) + "\nDataType of Name: " + typeof (name));
}
displayDataType<number, string>(101, "Ankit");


// ...............................................

function displayType<T, U>(id: T, name: U): void {
    console.log(typeof (id) + ", " + typeof (name));
}

displayType<number, string>(1, "Steve"); // number, string