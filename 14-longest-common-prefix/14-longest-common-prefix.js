/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
     if (strs[0] === "") return "";
  if (strs.length === 1) return strs.join("");
  let endResult = [];
  let result = [];
  let char = "";
  console.log(strs);
  for (let index = 0; index < strs[0].length; index++) {
    let y;
    for (y = 1; y < strs.length; y++) {
      // if (result.includes(strs[y][index])) {
      //   continue;
      // }
      if (strs[0][index] === strs[y][index]) {
        continue;
      } else {
        // if (y > 1) {
        //   result.pop();
        // }

        if (endResult.length === 0) {
          return "";
        } else {
          return endResult.join("");
        }
      }
    }
    endResult.push(strs[0][index]);
  }
  return endResult.join("");

};