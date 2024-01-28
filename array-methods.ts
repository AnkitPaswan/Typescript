
var fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]

console.log(fruits.pop()); //output: Orange

fruits.push('Papaya');
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']

fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 

console.log(fruits.indexOf('Papaya'));//output: 2

fruits = fruits.slice(1, 4);
console.log(fruits);

fruits = fruits.splice(1);
console.log(fruits);


var arr: number[] = [12, 14]
var [x, y] = arr
console.log(x) //output 12
console.log(y)//output 14


let student: readonly string[] = ["ankit", "arjun"]

student = student.push("satyam")

export { }