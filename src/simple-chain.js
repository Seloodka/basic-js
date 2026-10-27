const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this._length;
  },

  addLink(value) {
    const strValue = String(value);
    const elementToPush = strValue ? `( ${strValue} )` : "(  )";

    this._chainElements.push(elementToPush);
    this._length += 1;

    return chainMaker;
  },

  removeLink(position) {
    const positionToRemove = position - 1;
    const chainLength = this._chainElements.length;

    if (positionToRemove >= chainLength || positionToRemove < 0) {
      this.finishChain();
      throw new Error("You can't remove incorrect link!");
    }

    this._chainElements.splice(positionToRemove, 1);
    this._length -= 1;

    return chainMaker;
  },

  reverseChain() {
    this._chainElements.reverse();
    return chainMaker;
  },

  finishChain() {
    const existingChain = this._chainElements;
    const finalCain = existingChain.join("~~");

    this._chainElements = [];
    this._length = 0;

    return finalCain;
  },

  _length: 0,
  _chainElements: [],
};

module.exports = {
  chainMaker,
};
