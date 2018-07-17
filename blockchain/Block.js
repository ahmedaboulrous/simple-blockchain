const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(timestamp, data, prevHash = '') {
    this._timestamp = timestamp;
    this._data = data;
    this._prevHash = prevHash;
    this._nonce = 0;
    this._hash = this.calcHash();
  }

  calcHash() {
    return SHA256(this._timestamp
      + JSON.stringify(this._data)
      + this._prevHash
      + this._nonce).toString();
  }

  mineBlock(difficulty) {
    while (this._hash.substr(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this._nonce++;
      this._hash = this.calcHash();
    }
    console.log('Block mined : ', this._hash);
  }
}

module.exports = Block;
