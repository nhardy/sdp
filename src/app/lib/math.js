/**
 * Python's `divmod()` function ported to ES6
 * @param {Number} dividend
 * @param {Number} divisor
 * @returns {Array} [quotient, remainder]
 */
export function divmod(dividend, divisor) { // eslint-disable-line import/prefer-default-export
  return [Math.floor(dividend / divisor), dividend % divisor];
}
