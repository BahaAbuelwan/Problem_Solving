/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arr=[]
    let count=  0
    for(let i=0; i<nums.length;i++){
        if(!arr.includes(nums[i])){
            arr.push(nums[i])
            
        }
        else{
            console.log(i)
            nums.splice(i,1)
            i--
        }
    }
    console.log(nums)
    return 
};