// TypeScript - Static
// ES6 includes static members and so does TypeScript. The static members of a class are accessed using the class name and dot notation, without creating an object e.g. <ClassName>.<StaticMember>.

// The static members can be defined by using the keyword static. Consider the following example of a class with static property.

// class Circle {
//     static pi: number = 3.14;
// }

// examples:

class Circle {
    static pi: number = 3.14;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}
Circle.pi; // returns 3.14
Circle.calculateArea(5); // returns 78.5