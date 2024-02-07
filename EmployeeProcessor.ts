// import { Employee } from "./modules";
// let empObj = new Employee("Steve Jobs", 1);
// empObj.displayEmployee(); //Output: Employee Code: 1, Employee Name: Steve Jobs  




// Importing Module into Variable
// You can import all the exports in a module as shown below.

// EmployeeProcessor.ts 
// import * as Emp from "./modules"
// console.log(Emp.age); // 20

// let empObj = new Emp.Employee("Bill Gates", 2);
// empObj.displayEmployee(); //Output: Employee Code: 2, Employee Name: Bill Gates


import { Employee as Associate } from "./modules"
let obj = new Associate("James Bond", 3);
obj.displayEmployee();//Output: Employee Code: 3, Employee Name: James Bond