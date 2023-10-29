import {expect, describe, it} from '@jest/globals';
import { removeEmptyValuesFromObject } from "./removeEmptyValuesFromObject";

describe('remove empty values from object', () => {
    it('Should remove the objects', () => {
        const obj = {
            name: 'John',
            age: 20,
            address: '',
            thing: undefined, 
            thing2: null,
            phone: null
        }
        const result = removeEmptyValuesFromObject(obj);
        console.log(result);

        expect(result).toEqual({
            name: 'John',
            age: 20
        })
    })
})
