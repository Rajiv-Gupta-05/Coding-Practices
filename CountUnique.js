// Count Unique Number
// [1,1,2,2,3,4,4,5,6,7,8,8]

function UniqueCount(array) {
  if (array.length) {
    let i = 0;
    for (j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}
const result = UniqueCount([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(result);

// Time Complexity is o(n) which is linear in nature.
