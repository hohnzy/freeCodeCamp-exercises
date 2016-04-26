// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!



// Solution A

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  else {
    var n = num - 1;
    while (n > 0) {
      num = num * n;
      n--;
    }
    return num;
  }
}

console.log(factorialize(5));
console.log(factorialize(0));
console.log(factorialize(-5));

// Solution B

function fact(num) {
    if (num === 0) {
        return 1;
    }
    else {
        return num * fact(num - 1);
    }
}

console.log(fact(5));
console.log(fact(0));
// Cannot use for negative numbers
// console.log(fact(-5));