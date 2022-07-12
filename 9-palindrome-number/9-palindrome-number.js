/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)return false
    x=x+""
          for (let index = 0, y = x.length - 1; index <= y; index++, y--) {
    if(!(x[index]===x[y])){
      return false
    }
    
  }
    return true
};