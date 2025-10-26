const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // Remove line below and write your code here
    //throw new NotImplementedError('Not implemented');
    if (!Array.isArray(arr)) return 0;

    let depth = 1;
    for (const arrElement of arr) {
      if (Array.isArray(arrElement)) {
        let currentDepth = 1 + this.calculateDepth(arrElement);
        if (currentDepth > depth) {
          depth = currentDepth;
        }
      }
    }
  return depth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
