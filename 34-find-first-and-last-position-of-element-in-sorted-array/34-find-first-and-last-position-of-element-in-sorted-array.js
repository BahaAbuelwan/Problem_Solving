/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   let result=[]

 for(let i=0;i<nums.length;i++){
  if(nums[i]===target){
    result.push(i)
  }
 }
 if (result.length===1) {
  result.push(result[0])
 }
 return result.length?[result[0],result[result.length-1]]:[-1,-1]
};