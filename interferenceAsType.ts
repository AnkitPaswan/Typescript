// Interface as Type
// Interface in TypeScript can be used to define a type and also to implement it in the class.

// The following interface IEmployee defines a type of a variable.

interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key: 1, value: "Steve" }; // OK

let kv2: KeyPair = { key: 1, val: "Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

let kv3: KeyPair = { key: 1, value: 100 }; // Compiler Error: 