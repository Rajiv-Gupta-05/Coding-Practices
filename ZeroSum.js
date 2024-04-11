// Checking sum zero problem  || No javascript inbuild function used:
// [-5,-4,-3,-2,0,1,2,4,6,8] -> Input
// [-4,4] -> Output

function Zerosum(array) {
    let left = 0;
    let right = array.length - 1;
  
    while (left < right) {
      sum = array[left] + array[right];
      if (sum === 0) {
        return [array[left], array[right]];
      }
      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  let result = Zerosum([-5, -4, -3, -2, 0, 1, 2, 4, 6, 8]);
  console.log(result);
  
  // Time Complexity o(n) which is linear.
