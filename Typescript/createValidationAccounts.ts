import Web3 from 'web3';
// import fs from 'fs';
import * as fs from 'fs'

/**
 * @interface IcreateValidationAccounts
 * @description The return type of the create_validation_accounts function.
 * @property {Object} controller - The controller account.
 * @property {string} controller.address - The address of the controller account.
 * @property {string} controller.privateKey - The private key of the controller account.
 * @property {Object} stash - The stash account.
 * @property {string} stash.address - The address of the stash account.
 * @property {string} stash.privateKey - The private key of the stash account.
 *      
 */
interface IcreateValidationAccounts {
    controller: {
        address: string,
        privateKey: string
    }
    stash: {
        address: string,
        privateKey: string
    }
}

/**
 * 
 * @param options 
 * @description Creates a controller and stash account for a validator.
 * @returns 
 * @author 0xlino
 * @example
 * const accounts = await create_validation_accounts({
 *     saveToDisk: true
 * });
 */
const createValidationAccounts = async (options:{
    saveToDisk?: boolean
}) : Promise<IcreateValidationAccounts> => {
    const web3 = new Web3();
    const controller = web3.eth.accounts.create();
    const stash = web3.eth.accounts.create();

    if (options.saveToDisk) {
        fs.writeFileSync('./controller.json', JSON.stringify({
            controller: controller,
            stash: stash
        }, null, 4));
    }

    return {
        controller,
        stash
    }
}

export default createValidationAccounts;
export { IcreateValidationAccounts };