// Checking square in another array            || No javascript inbuild function used:
// arr1=[1,2,3,4], arr2=[1,9,4,16]

function isSquareCheck(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let isSquare = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        isSquare = true;
      }
      if(j === arr2.length-1){
        if(!isSquare) {
            return false;
        }
      }
    }
  }
  return true;
}
const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(result);

// Time Complexity is O(n^2) which is quadratic in nature.
