const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Remove line below and write your code here
  //throw new NotImplementedError('Not implemented');
  const digitArr = n.toString().split('');

  for (let i = 0; i < digitArr.length - 1; i++) {
    if (digitArr[i] < digitArr[i + 1]) {
      digitArr.splice(i, 1);
      return +(digitArr.join(''));
    }
  }
    digitArr.pop();
    return +(digitArr.join(''));
}

module.exports = {
  deleteDigit
};
