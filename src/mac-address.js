const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // Remove line below and write your code here
  //throw new NotImplementedError('Not implemented');
  if (n.length !== 17) return false;

  const tempArr = n.toUpperCase().split('-');
  if (tempArr.length !== 6) return false;

  for (const part of tempArr) {
    if (part.length !== 2) return false;

    for (const char of part) {
      if (!/^[0-9A-F]$/.test(char)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  isMAC48Address
};
