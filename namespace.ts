
// The namespace is used for logical grouping of functionalities. A namespace can include interfaces, classes, functions and variables to support a single or a group of related functionalities.

// A namespace can be created using the namespace keyword followed by the namespace name. All the interfaces, classes etc. can be defined in the curly brackets { }.


// FileName :IShape.ts 
// ---------- 
// namespace Drawing { 
//    export interface IShape { 
//       draw(); 
//    }
// }  

// FileName :Circle.ts 
// ---------- 
// /// <reference path = "IShape.ts" /> 
// namespace Drawing { 
//    export class Circle implements IShape { 
//       public draw() { 
//          console.log("Circle is drawn"); 
//       }  

//       FileName :Triangle.ts 
//       ---------- 
//       /// <reference path = "IShape.ts" /> 
//       namespace Drawing { 
//          export class Triangle implements IShape { 
//             public draw() { 
//                console.log("Triangle is drawn"); 
//             } 
//          } 

//          FileName : TestShape.ts 
//          /// <reference path = "IShape.ts" />   
//          /// <reference path = "Circle.ts" /> 
//          /// <reference path = "Triangle.ts" />  
//          function drawAllShapes(shape:Drawing.IShape) { 
//             shape.draw(); 
//          } 
//          drawAllShapes(new Drawing.Circle());
//          drawAllShapes(new Drawing.Triangle());
//       }
//    }
// }















namespace StringUtility {
    function ToCapital(str: string): string {
        return str.toUpperCase();
    }

    function SubString(str: string, from: number, length: number = 0): string {
        return str.substr(from, length);
    }
}

namespace StringUtility {

    export function ToCapital(str: string): string {
        return str.toUpperCase();
    }

    export function SubString(str: string, from: number, length: number = 0): string {
        return str.substr(from, length);
    }
}