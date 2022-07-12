/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let [I, V, X, L, C, D, M] = [1, 5, 10, 50, 100, 500, 1000];
  s = s.split("");
  let number = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      s[i] = I;
    }
    if (s[i] === "V") {
      s[i] = V;
    }
    if (s[i] === "L") {
      s[i] = L;
    }
    if (s[i] === "C") {
      s[i] = C;
    }
    if (s[i] === "D") {
      s[i] = D;
    }
    if (s[i] === "M") {
      s[i] = M;
    }
    if (s[i] === "X") {
      s[i] = X;
    }
  }
  console.log(s);

  number = s[s.length - 1];
  console.log(number);

  for (let index = s.length - 2; index >= 0; index--) {
    if (s[index] >= s[index + 1] || s[index + 1] === undefined) {
      number = number + s[index];
    } else {
      number = number - s[index];
    }
  }
  return number;
};