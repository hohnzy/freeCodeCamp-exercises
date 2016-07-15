// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.


function booWho(bool) {

  if (bool === true || bool === false) {
    return true;
  }
  
  return false;
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([].slice));
console.log(booWho([1, 2, 3]));
console.log(booWho(NaN));
console.log(booWho("false"));
