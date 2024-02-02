// Rest Parameters
// Rest parameters don’t restrict the number of values that you can pass to a function. However, the values passed must all be of the same type. In other words, rest parameters act as placeholders for multiple arguments of the same type.

// To declare a rest parameter, the parameter name is prefixed with three periods.


function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum)
}
addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)