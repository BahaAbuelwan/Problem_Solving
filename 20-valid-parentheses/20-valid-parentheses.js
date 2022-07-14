/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let arr = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(" || s[index] === "{" || s[index] === "[") {
      arr.push(s[index]);
    } else if (s[index] === "]" && arr[arr.length - 1] === "[") {
      arr.pop();
    } else if (s[index] === "}" && arr[arr.length - 1] === "{") {
      arr.pop();
    } else if (s[index] === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    } else return false;
  }
  return arr.length === 0;
};