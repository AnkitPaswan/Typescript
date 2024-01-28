

// charAt()
// The charAt() method returns a character at the specified index from a string.
// This method takes one number argument index 
// and returns the character at the given index in the string.
// Syntax:
// character = str.charAt(index)


let str: string = 'Hello TypeScript';
str.charAt(0); // returns 'H'
str.charAt(2); // returns 'l'
console.log(str.charAt(2))
console.log(str.charAt(7))
console.log(str.charAt(0))


//--------------------------------------------------------

// concat()
// The concat() method concatenates two or more specified strings.

// Signature:
// str.concat(string2[, string3, ..., stringN])

// This method takes two or more arguments of strings and returns a 
// concatenation of the given strings.

let str1: string = 'Hello';
let str2: string = 'TypeScript';
console.log(str1.concat(str2)); // returns 'HelloTypeScript'
console.log(str1.concat(' ', str2)); // returns 'Hello TypeScript'
console.log(str1.concat(' Mr. ', 'Ankit')); // returns 'Hello Mr. Ankit'




// --------------------------------------------------------------------------

// indexOf()
// The indexOf() method returns an index of first occurrence of the specified sub string from a string. The index starts from 0. It returns -1 if not found. the indexOf() method search is case-sensitive, so 't' and 'T' are different.

// Optionally, you can specify an index as a second parameter to define where the searching should start from.

// Signature:
// str.indexOf(searchValue[, fromIndex])
// This method takes two arguments, the search string and an optional index number denoting the location the searching should start.

let str3: string = 'TypeScript';

console.log(str3.indexOf('T'))// returns 0
console.log(str3.indexOf('p')); // returns 2
console.log(str3.indexOf('e')); // returns 3
console.log(str3.indexOf('T', 1)); // returns -1
console.log(str3.indexOf('t', 1)); // returns 9

// ----------------------------------------------------------------------------------

// replace()
// The replace() method replaces the matched substring with the specified string. The regular expression can also be used for searching.

// Signature:
// str.replace(regexp|substr, newSubstr|function)
// This method takes two arguments: a regex of string to be found, and the new string that will replace the existing substring.


let str4: string = 'Hello Javascript';
let str5: string = 'TypeScript';

console.log(str4.replace('Javascript', 'TypeScript')); // returns 'Hello TypeScript'
console.log(str4.replace(/Javascript/g, 'TypeScript')); // returns 'Hello TypeScript'

console.log(str4.replace('Java', 'Type')); // returns 'Hello TypeScript'
console.log(str4.replace('JavaScript', str5)); // returns 'Hello TypeScript'
console.log(str4.replace(/Hello/g, 'Hi')); // returns 'Hi Javascript'

// ---------------------------------------------------------------------------


// split()
// The split() method splits a string into substrings based on a specified separator character and returns an array of substrings.

// Signature:
// str.split([separator[, limit]])
// This method takes two arguments: a separator string and an optional limit specifying the number of entries to be found.

let str6: string = "I love to code in JavaScript";
console.log(str6.split(" "))   // ["I", "love", "to", "code", "in", "JavaScript"]
console.log(str6.split(" ", 2)) // ["I", "love", "to"]

let str7: string = 'Apple, Banana, Orange';
let str8: string = ',';

console.log(str7.split(str8)) // returns [ 'Apple', ' Banana', ' Orange' ]
console.log(str7.split(',')) // returns [ 'Apple', ' Banana', ' Orange' ]
console.log(str7.split(',', 2)) // returns [ 'Apple', ' Banana' ]
console.log(str7.split(',', 1)) // returns [ 'Apple']
// --------------------------------------------------------------------------------

// toUpperCase()
// The toUpperCase() method returns an upper case representation of the string it is called on.

let str9: string = 'Hello Typescript';
console.log(str9.toUpperCase()); // returns 'HELLO TYPESCRIPT'
console.log('hello typescript'.toUpperCase()); // returns 'HELLO TYPESCRIPT'


//-------------------------------------------------------------------------------

// toLowerCase()
// The toLowerCase() method returns a lower case representation of the string it is called on.

let str10: string = 'Hello Typescript';
console.log(str.toLowerCase()); // returns hello typescript
console.log('HELLO TYPESCRIPT'.toLowerCase()); // returns hello typescript



