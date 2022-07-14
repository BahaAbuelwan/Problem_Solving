/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let y = i + 1; y < nums.length; y++) {
      if (right == Number.NEGATIVE_INFINITY) {
        right = nums[y];
      } else {
        right = right + nums[y];
      }
    }
    
    for (let x = i - 1; x >= 0; x--) {
      if (left === 0) {
        left = nums[x];
      } else {
        left = left + nums[x];
      }
      
    }

    if (left === right) {
      return i;
    } else {
      left = 0;
      right = 0;
    }
  }

  return -1;
};