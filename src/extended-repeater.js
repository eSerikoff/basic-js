const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  // Remove line below and write your code here
  //throw new NotImplementedError('Not implemented');

  const mainString = String(str);
  const opts = options || {};

  const repeatTimes = opts.repeatTimes || 1;
  const separator = opts.separator || '+';
  const addition = opts.addition !== undefined ? String(opts.addition) : '';
  const additionRepeatTimes = opts.additionRepeatTimes || 1;
  const additionSeparator = opts.additionSeparator || '|';

  let additionStr = '';
  if (addition && additionRepeatTimes > 0) {
    additionStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  }

  const mainStr = mainString + additionStr;

  if (repeatTimes > 1) {
    return Array(repeatTimes).fill(mainStr).join(separator);
  }

  return mainStr;
}

module.exports = {
  repeater
};
