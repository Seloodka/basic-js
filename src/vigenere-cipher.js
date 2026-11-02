const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(message, key, true);
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(message, key, false);
  }

  process(message, key, isEncrypt) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    let result = "";

    for (const char of message) {
      const messageIndex = alphabet.indexOf(char);

      if (messageIndex === -1) {
        result += char;
        continue;
      }

      const currentKeyChar = key[keyIndex % key.length];
      const currentKeyIndex = alphabet.indexOf(currentKeyChar);

      let newIndex;

      if (isEncrypt) {
        newIndex = (messageIndex + currentKeyIndex) % 26;
      } else {
        newIndex = (messageIndex - currentKeyIndex + 26) % 26;
      }

      result += alphabet[newIndex];

      keyIndex++;
    }

    return this.isDirect ? result : [...result].reverse().join("");
  }
}
module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
