// for...in Loop
// Another form of the for loop is for...in. This can be used with an array, list, 
// or tuple. The for...in loop iterates through a list or collection and returns an index on
//  each iteration.

let arr = [10, 20, 30, 40];

for (var index in arr) {
    console.log(index); // prints indexes: 0, 1, 2, 3

    console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

export { }