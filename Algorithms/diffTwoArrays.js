// Compare two arrays and return a new array with any items only found in one
// of the two given arrays, but not both. In other words, return the symmetric
// difference of the two arrays.

function diff(arr1, arr2) {
  var newArr = [];
  for (var x = 0; x < arr1.length; x++) {
    if (arr2.indexOf(arr1[x]) === -1) {
      newArr.push(arr1[x]);
    }    
  }
  for (var y = 0; y < arr2.length; y++) {
    if ((arr1.indexOf(arr2[y]) === -1) && newArr.indexOf(arr2[y]) === -1) {
      newArr.push(arr2[y]);
    }
  }
  return newArr;
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diff([], ["snuffleupagus", "cookie monster", "elmo"]));
