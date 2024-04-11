// Divide and Conquer technique  || No javascript inbuild function used:
// Find the index of given number in a sorted array 7.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] -> Output = 6

function BinarySearch(array, number) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    if (array[midIndex] < number) {
      min = midIndex + 1;
    } else if (array[midIndex] > number) {
      max = midIndex - 1;
    } else {
      return midIndex; // return the index if number is found
    }
  }
  return -1; // return -1 if number is not found
}

const result = BinarySearch(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);
console.log(result);
