// Example

// The below example helps us to understand the generics clearly.

function identity<T>(arg: T[]): T[] {
    return arg;
}
let output1 = identity<string>(["myString"]);
let output2 = identity<number>([100]);

output1.push("Hello TypeScript"); // OK
output2.push(400); // OK

console.log(output1);
console.log(output2);  