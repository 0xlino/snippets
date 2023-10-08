import {expect, describe, it} from '@jest/globals';
import QueueSystem from "./QueueSystem";

describe('QueueSystem', () => {
    it('should return queue system', () => {
        const myQueue = new QueueSystem();
        expect(myQueue).toHaveProperty('enqueue');
        expect(myQueue).toHaveProperty('run');

        let timeIncrement = 1000;
        myQueue.enqueue(() => {
            console.log(timeIncrement);
        }, Date.now() + 1000);

        expect(myQueue).toHaveProperty('items');
    })
})