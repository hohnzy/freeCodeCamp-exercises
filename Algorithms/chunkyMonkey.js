// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var position = 0;
  var newArr = [];
  for (var x = 0; x < arr.length / size; x++) {
    newArr.push(arr.slice(position, position + size));
    position += size;
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));