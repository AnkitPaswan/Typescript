// Numeric Enum
// Numeric enums are number-based enums i.e. they store string values as numbers.

// Enums can be defined using the keyword enum. Let's say we want to store a set of print media types. The corresponding enum in TypeScript would be:

// enum PrintMedia {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,
//     Book
// }
// console.log(PrintMedia)


// Reverse mapping
// Enum in TypeScript supports reverse mapping. 
// It means we can access the value of a member and also a member name from its value.
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);



// String Enum
// String enums are similar to numeric enums, except that the enum values are initialized with string values rather than numeric values.

// The benefits of using string enums is that string enums offer better readability. If we were to debug a program, it is easier to read string values rather than numeric values.

enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
console.log(PrintMedia.Newspaper); //returns NEWSPAPER
console.log(PrintMedia['Magazine']);//returns MAGAZINE



// Heterogeneous Enum
// Heterogeneous enums are enums that contain both string and numeric values.

enum Status {
    Active = 'ACTIVE',
    Deactivate = 1,
    Pending
}
console.log(Status)