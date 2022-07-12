/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s==="")return 0
let uniqueArr = [];
  let count = [];
  let length = 0;
  let splitStr = s.split("");
  
  for (var i = 0; i < splitStr.length; i++) {
      if (!(uniqueArr.includes(splitStr[i]))) {
          uniqueArr.push(splitStr[i]);
      } else {
          count.push(uniqueArr.length);
          length = uniqueArr.slice(0, uniqueArr.indexOf(splitStr[i])+1).length;
          uniqueArr.splice(0, length);
          uniqueArr.push(splitStr[i]);
      }
      count.push(uniqueArr.length);
  }
  
  return Math.max(...count);
}