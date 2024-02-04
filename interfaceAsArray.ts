
// Interface for Array Type
// An interface can also define the type of an array where you can define the type of index as well as values.

interface NumList {
    [index: number]: number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
    [index: string]: string
}

let strArr: IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

console.log(numArr, strArr)