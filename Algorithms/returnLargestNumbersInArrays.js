// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    var maximums = [];
    for (var x = 0; x < arr.length; x++) {
        maximums.push(0);
        for (var y = 0; y < arr[x].length; y++) {
            if (arr[x][y] > maximums[x]) {
            maximums[x] = arr[x][y];
            }
        }
    }
    return maximums;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));