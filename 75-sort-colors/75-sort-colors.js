/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   let n = 0;
  while (n < nums.length) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[n]) {
        [nums[i], nums[n]] = [nums[n], nums[i]];
      }
    }
    n++;
  }
  return nums;
};