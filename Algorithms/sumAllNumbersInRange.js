// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.


function sumAll(arr) {
    var sum = 0;
    for (var x = Math.min(...arr); x <= Math.max(...arr); x++)
        sum += x;
    return sum;
}
console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));
console.log(sumAll([5, 10]));