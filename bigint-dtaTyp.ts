// The bigint is a new primitive type in Typescript. 
// It is available only if you target esnext in tsconfig.json.
//  it represents the whole number. It can hold numbers larger than 253 – 1. 
// The BigInt uses the arbitrary-precision arithmetic. 
// Typescript BigInt variables are used to store big integer values 
// that are too big to be represented by a normal JavaScript Number.

// There are two ways in which you create bigint : -
// A bigInt is created by appending n to the end of an integer literal

let num: BigInt = 203945766768979785754n;

console.log(num)

let big1 = 9007199254740991n;

console.log(typeof (big1))

// or by calling the function Global function BigInt()

let big2 = BigInt(9007199254099);

console.log(typeof (big2))




// Arithmetic Operations


let bigVar = 9007199254740991n;

let b = bigVar + 1n;
console.log(b);      //9007199254740992n

b = bigVar * 10n;
console.log(b);     //90071992547409910n

b = bigVar / 5n;
console.log(b);     //1801439850948198n
