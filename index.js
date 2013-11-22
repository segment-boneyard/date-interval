
var defaults = require('defaults');

/**
 * Expose `interval`.
 */

module.exports = interval;


/**
 * Get the dates interval start and end.
 *
 * @param {Granularity} granularity
 * @param {Date} start
 * @param {Date} end
 * @param {Object} options (optional)
 *   @param {Object} floor
 * @return {Array} An array of dates
 */

function interval (granularity, start, end, options) {
  if (typeof granularity.shift !== 'function')
    throw new Error('First argument must be a require("date-math") granularity.');
  if (!(start instanceof Date))
    throw new Error('Start must be a date.');
  if (!(end instanceof Date))
    throw new Error('End must be a date.');

  options = defaults(options, { floor: false });

  var dates = [];
  var current;
  if (options && options.floor) {
    current = granularity.floor(start);
  } else {
    current = new Date(start);
  }

  while (current.getTime() < end.getTime()) {
    dates.push(current);
    current = granularity.shift(current, 1);
  }

  return dates;
}