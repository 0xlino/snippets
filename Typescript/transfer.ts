import Web3 from 'web3';

interface ITransferSomeDust {
    fromPrivate: string;
    to: string;
    provider: string;
    value: string;
}

/**
 * 
 * @param argv 
 * @description Transfers some dust from one account to another.
 * @returns  
 * @example
 * transferSomeDust(obj)
 * .then((result) => {
 *  console.log(result);
 * }
 * .catch((error) => {
 *  console.error(error);
 * })
 */
const transferSomeDust = async (argv: ITransferSomeDust) => {
    let Accounts = require('web3-eth-accounts');
    let accounts = new Accounts();
    try {
      accounts.privateKeyToAccount(argv.fromPrivate);
    } catch (err) {
      console.error('Please enter a valid sender private key');
      return;
    }
  
    const web3 = new Web3(argv.provider);
    if (!web3.utils.isAddress(argv.to)) {
      console.error('Please enter a valid receiver address');
      return;
    }
    try {
      const isSyncing = await web3.eth.isSyncing();
      if (isSyncing !== false) {
        console.error('Node is not completely synced yet');
      }
    } catch (e) {
      console.error('Node endpoint is not reachable');
    }
  
    try {
      const owner = web3.eth.accounts.wallet.add(argv.fromPrivate);
      await web3.eth.sendTransaction({
        from: owner.address,
        to: argv.to,
        gas: 21000,
        value: argv.value,
      }).on('transactionHash', (hash) => {
        console.log(`🎁 Successfully transferred → ${hash}`);
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `Failed to transfer due to the following error: ${error.message}`);
      }
    }
}

transferSomeDust({
    fromPrivate: "0x0000000",
    to: "0x0000000",
    provider: "http://",
    value: "0x0000000"
}).catch((error) => {
  console.error(error);
  process.exit(0);
});
