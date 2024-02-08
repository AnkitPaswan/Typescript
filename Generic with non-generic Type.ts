function displayType<T>(id: T, name: string): void {
    console.log(typeof (id) + ", " + typeof (name));
}

displayType<number>(1, "Steve"); // number, string




// ............................
function displayDataType<T>(id: T, name: string): void {
    console.log("DataType of Id: " + typeof (id) + "\nDataType of Name: " + typeof (name));
}
displayDataType<number>(1, "Ankit");  