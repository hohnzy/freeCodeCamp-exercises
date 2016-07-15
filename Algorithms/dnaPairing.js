// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
  var arr = [];
  str = str.split("");
  console.log(str);
  for (var i = 0; i < str.length; i++) {
    arr.push([]);

    if (str[i] === "G") {
      arr[i].push("G");
      arr[i].push("C");
    }
    if (str[i] === "C") {
      arr[i].push("C");
      arr[i].push("G");
    }
    if (str[i] === "A") {
      arr[i].push("A");
      arr[i].push("T");
    }
    if (str[i] === "T") {
      arr[i].push("T");
      arr[i].push("A");
    }
  }
  return arr;
}


console.log(pairElement("GCG"));
console.log(pairElement("CTCTA"));
console.log(pairElement("TTGAG"));
