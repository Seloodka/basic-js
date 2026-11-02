const { NotImplementedError } = require("../lib");

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
    let currDepth = 0;
    let maxDepth = 0;

    const goDeeper = (arr, currDepth) => {
      arr.forEach((item) => {
        if (!Array.isArray(item)) {
          maxDepth = Math.max(maxDepth, currDepth);
          return;
        }
        maxDepth = Math.max(maxDepth, currDepth + 1);

        goDeeper(item, currDepth + 1);
      });
    };

    goDeeper(arr, currDepth + 1);

    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
