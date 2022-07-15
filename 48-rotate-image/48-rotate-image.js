/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let queue=[]
    for (let i = 0; i < matrix.length; i++) {
        for (let y = matrix[0].length-1; y >= 0; y--) {
          queue.push(matrix[y][i]);
          
        }
    }
    let count=0
for (let j = 0; j < matrix.length; j++) {
  for (let x = 0; x < matrix[0].length; x++) {
   matrix[j][x]=queue[count]
   count++
  }
  
}
return matrix
};