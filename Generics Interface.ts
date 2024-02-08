
interface People {
    name: string
    age: number
}
interface Celebrity extends People {
    profession: string
}
function printName<T extends Celebrity>(theInput: T): void {
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);
}
let player: Celebrity = {
    name: 'Rohit Sharma', age: 30, profession: 'Cricket Player'
}
printName(player);



// Generics Interface as Function Type
// We can also use generics interface as function types. The following example can understand it.

// Example

interface StudentInfo<T, U> {
    (id: T, value: U): void;
};
function studentData(id: number, value: string): void {
    console.log('Id = ' + id + ', \nName = ' + value)
}
let std: StudentInfo<number, string> = studentData;
std(11, "Rohit Sharma");



