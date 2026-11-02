const { NotImplementedError } = require("../lib");

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
  const repeatTimes = options.repeatTimes <= 0 ? 1 : options.repeatTimes;
  const additionRepeatTimes =
    options.additionRepeatTimes < 0 ? 0 : options.additionRepeatTimes;

  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";

  const additionString = new Array(additionRepeatTimes)
    .fill(String(options.addition))
    .join(additionSeparator);

  const strToRepeat =
    options.addition === undefined ? str : str + additionString;

  const output = new Array(repeatTimes).fill(strToRepeat).join(separator);

  return output;
}

module.exports = {
  repeater,
};
