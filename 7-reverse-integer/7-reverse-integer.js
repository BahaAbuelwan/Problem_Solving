/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x + "";
  x = x.split("");
  let arr = [];
  if (!x.includes("-")) {
    x = x.reverse();
    for (let i = 0; i < x.length; i++) {
      if (x[0] === "0") {
        x.shift();
        i--;
      }
    }
    if (x.join("")>-2147483648 &&x.join("")<2147483647 ) {
      return x.join("");
    }else{
      return 0
    }
  
  } else {
    arr.push(x[0]);
    for (let i = x.length - 1; i >= 1; i--) {
      arr.push(x[i]);
    }
    console.log(arr);
    for (let y = 1; y < arr.length; y++) {
      if(arr[1]==="0"){
        console.log(arr[1]);
        arr.splice(1,1)
        y--
      }
    }
    if (arr.join("")>-2147483648 &&arr.join("")<2147483647 ) {
      return arr.join("");
    }else{
      return 0
    }
  }
};