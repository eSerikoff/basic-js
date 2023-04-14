const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(/*  date  */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  /*
  if (date === null){
    console.log('Unable to determine the time of year!');
  }
  if (typeof date !== 'object'){
    console.log('Invalid date!');
  }

  let String = '';

  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      String = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      String = 'spring';
      break;
    case 2:
    case 3:
    case 4:
      String = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      String = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      String = 'fall';
      break;
    default:
      break;
  }
  return String;
  */
}

module.exports = {
  getSeason
};
