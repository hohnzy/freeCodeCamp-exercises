// Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

function repeatStringNumTimes(str, num) {
  var str2 = "";
  if (num < 1) {
    return str2;
  }
  else {
    for (var x = 0; x < num; x++) {
      str2 = str2.concat(str);
    }
    return str2;
  }
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
