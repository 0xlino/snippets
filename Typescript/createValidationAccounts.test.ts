import {expect, describe, it} from '@jest/globals';
import fs from 'fs';
import createValidationAccounts from "./createValidationAccounts";

describe('createValidationAccounts', () => {
    it('should return controller and stash accounts', async () => {
        const accounts = await createValidationAccounts({
            saveToDisk: false
        });
        expect(accounts).toHaveProperty('controller');
        expect(accounts).toHaveProperty('stash');
        expect(accounts.controller).toHaveProperty('address');
        expect(accounts.controller).toHaveProperty('privateKey');
        expect(accounts.stash).toHaveProperty('address');
        expect(accounts.stash).toHaveProperty('privateKey');
    });

    // TODO: figure out why fs test is failing
});