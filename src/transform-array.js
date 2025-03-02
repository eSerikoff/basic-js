const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/*  arr  */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
/*
  if (!Array.isArray(arr)) {
    console.log("'arr' parameter must be an instance of the Array!");
    return false;
  } else {

    let tempArr = [];

    for (let i = 0; i < arr.length; i++){
      if (typeof arr[i] !== 'string'){
        tempArr.push(arr[i]);
      } else {
        switch (arr[i]) {
          case '--discard-next':
            i++;
            break;
          case '--discard-prev':
            tempArr.pop();
            break;
          case '--double-next':
            tempArr.push(arr[i + 1]);
            break;
          case '--double-prev':
            tempArr.push(arr[i - 1]);
            break;
          default:
            break;
        }
      }
    }
    return tempArr;
  }
*/

}

module.exports = {
  transform
};
