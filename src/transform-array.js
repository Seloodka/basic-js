const { NotImplementedError } = require("../lib");

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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformedArr = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (typeof transformedArr[i + 1] !== "number") continue;
      transformedArr.splice(i + 1, 1);
    }

    if (arr[i] === "--discard-prev") {
      if (typeof transformedArr[i - 1] !== "number") continue;
      transformedArr.splice(i - 1, 1);
    }

    if (arr[i] === "--double-next") {
      if (typeof transformedArr[i + 1] !== "number") continue;
      transformedArr.splice(i + 1, 0, transformedArr[i + 1]);
    }

    if (arr[i] === "--double-prev") {
      if (typeof transformedArr[i - 1] !== "number") continue;
      transformedArr.splice(i - 1, 0, transformedArr[i - 1]);
    }
  }

  return transformedArr.filter((el) => typeof el === "number");
}

module.exports = {
  transform,
};
