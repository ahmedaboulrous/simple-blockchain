const Block = require('./Block');

class BlockChain {
  constructor(difficulty) {
    this._chain = [];
    this._difficulty = difficulty;
    this._chain.push(new Block('24/06/1995', 'GenesisBlock', '0000'));
  }

  getLatestBlock() {
    return this._chain[this._chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock._prevHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this._difficulty);
    this._chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this._chain.length; i++) {
      const currBlock = this._chain[i];
      const prevBlock = this._chain[i - 1];

      if (currBlock._hash !== currBlock.calcHash()) { return false; }
      if (currBlock._prevHash !== prevBlock._hash) { return false; }
    }
    return true;
  }
}

module.exports = BlockChain;
