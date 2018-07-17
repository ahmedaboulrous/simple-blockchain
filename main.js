
const Block = require('./blockchain/Block');
const BlockChain = require('./blockchain/BlockChain');

const myChain = new BlockChain(4);

console.log('Mining Block ... 1');
myChain.addBlock(new Block('01/01/2000', { from: 'ahmed', to: 'ali', amount: 123 }));

console.log('Mining Block ... 2');
myChain.addBlock(new Block('02/02/2009', { from: 'ali', to: 'ahmed', amount: 323 }));


// console.log(JSON.stringify(myChain, null, 4));

// console.log('is my chain valid: ', myChain.isChainValid());
