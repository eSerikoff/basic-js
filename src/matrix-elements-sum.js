const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // Remove line below and write your code here
  //throw new NotImplementedError('Not implemented');
  const numCol = matrix[0].length;
  const numRow = matrix.length;
  let sum = 0;

  for (let j = 0; j < numCol; j++) {
    for (let i = 0; i < numRow; i++) {
      if (matrix[i][j] === 0) break;
      sum += matrix[i][j];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
