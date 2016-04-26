// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters
// in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
    for (var x = 0; x < arr[1].length; x++) {
        if ((arr[0].toLowerCase()).indexOf(arr[1][x].toLowerCase()) === -1) {
            return false;
        }
    }
    return true;
}
console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["floor", "for"]));