// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var result;
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(i-1) + 1) {
      result = String.fromCharCode(str.charCodeAt(i-1) + 1);
    }
  }
  return result;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("yz"));
console.log(fearNotLetter("bcd"));
