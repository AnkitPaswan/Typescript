
// An object is an instance which contains set of key value pairs.
//  The values can be scalar values or functions or even array of other objects. The syntax is given below −

// Syntax
// var object_name = { 
//    key1: “value1”, //scalar value 
//    key2: “value”,  
//    key3: function() {
//       //functions 
//    }, 
//    key4:[“content1”, “content2”] //collection  
// };


// var person = {
//     firstname: "Ankit",
//     lastname: "Paswan"
// };
// //access the object values 
// console.log(person.firstname)
// console.log(person.lastname)

// OR

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

// Typescript Type template

var person = {
    firstName: "Ankit",
    lastName: "Paswan",
    sayHello: function () { }  //Type template 
}
person.sayHello = function () {
    console.log("hello " + person.firstName)
}
person.sayHello() // output : hello Ankit