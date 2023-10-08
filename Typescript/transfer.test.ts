import {expect, describe, it} from '@jest/globals';
import transfer from "./transfer";

// TODO: figure out why this test is failing
describe('transfer', () => {
    it('should return transaction hash', async () => {
        const transactionHash = await transfer({
            fromPrivate: "0x0000000",
            to: "0x0000000",
            provider: "http://",
            value: "0x0000000"
        });
        expect(transactionHash).toBe("0x0000000");
    });
});