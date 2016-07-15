// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function translatePigLatin(str) {
  if (str[0].match(/[aeiou]/)) {
    str = str + "way";
  }
  else {
    var firstVovelIndex = str.indexOf(str.match(/[aeiou]/));
    str = str.substr(firstVovelIndex) + str.substr(0, firstVovelIndex) + "ay";
  }
  return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));