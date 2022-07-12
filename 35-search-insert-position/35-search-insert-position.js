/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target>nums[nums.length-1]) return nums.length
  let start = 0,
    end = nums.length - 1,
    answer = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
      answer=mid
    }
    
   
  }

  return answer
};