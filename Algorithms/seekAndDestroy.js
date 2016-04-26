// You will be provided with an initial array (the first argument in the
// destroyer function), followed by one or more arguments. Remove all elements
// from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    var args = arr.slice.call(arguments, 1);
    for (var x = 0; x < args.length; x++) {
        arr = arr.filter(function(value) {
            return value !== args[x];
        });
    }
    return arr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer([2, 3, 2, 3], 2, 3));