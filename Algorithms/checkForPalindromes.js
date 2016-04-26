// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

function palindrome(str) {
  str = str.toLowerCase().replace(/\W+|_/g, "");
  var str2 = str.split("").reverse().join("");
  if (str === str2) {
    return true;
  }
  else {
    return false;
  }
}

console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));