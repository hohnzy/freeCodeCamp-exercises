// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    if (target === str.substr(-(target.length))) {
        return true;
    }
    else {
        return false;
    }
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("He has to give me a new name", "me"));