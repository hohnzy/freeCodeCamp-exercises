// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  var max = 0;
  str = str.split(" ");
    for (var x = 0; x < str.length; x++) {
        if (str[x].length > max) {
            max = str[x].length;
        }
    }
  return max;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));