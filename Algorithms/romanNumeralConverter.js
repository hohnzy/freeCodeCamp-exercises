// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(number) {
    var roman = [];
    var i, v, x, l, c, d, m;
    
    m = Math.floor(number / 1000); // 3
    for (var count = 0; count < m; count++) {
        roman.push("M");
    }
    var mRemainder = number % 1000; // 192
    if (mRemainder >= 900) {
        roman.push("CM");
        mRemainder = mRemainder - 900;
    }
    
    d = Math.floor(mRemainder / 500); // 0
    for (count = 0; count < d; count++) {
        roman.push("D");
    }
    var dRemainder = mRemainder % 500; // 192
    
    c = Math.floor(dRemainder / 100); // 1
    if (c === 9) {
        roman.push("CM");
    }
    else if (c === 4) {
        roman.push("CD");
    }
    else {
        for (count = 0; count < c; count++) {
            roman.push("C");
        }
    }
    var cRemainder = dRemainder % 100; // 92
    if (cRemainder >= 90) {
        roman.push("XC");
        cRemainder = cRemainder - 90;
    }
    
    l = Math.floor(cRemainder / 50); // 1
    for (count = 0; count < l; count++) {
        roman.push("L");
    }
    var lRemainder = cRemainder % 50; // 42
    
    x = Math.floor(lRemainder / 10); // 4
    if (x === 9) {
        roman.push("XC");
    }
    else if (x === 4) {
        roman.push("XL");
    }
    else {
        for (count = 0; count < x; count++) {
            roman.push("X");
        }
    }
    var xRemainder = lRemainder % 10; // 2
    if (xRemainder === 9) {
        roman.push("IX");
        xRemainder = xRemainder - 9;
    }
    
    v = Math.floor(xRemainder / 5); // 0
    for (count = 0; count < v; count++) {
        roman.push("V");
    }
    var vRemainder = xRemainder % 5; // 2
    
    i = vRemainder; // 2
    if (i === 4) {
        roman.push("IV");
    }
    else {
        for (count = 0; count < i; count++) {
            roman.push("I");
        }
    }
    
    return roman.join("");
}

console.log(convertToRoman(36));
console.log(convertToRoman(798));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
