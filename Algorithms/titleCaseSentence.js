// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var x = 0; x < str.length; x++) {
        str[x] = str[x].split("");
        str[x][0] = str[x][0].toUpperCase();
        str[x] = str[x].join("");
    }
    
    return str.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));