import {expect, describe, it} from '@jest/globals';
import calculateTimeToYield from "./calculateTimeToYield";

describe('calculateTimeToYield', () => {
    it('should return time to yield', () => {
        const totalItems = 10000000000;
        const stakedPercentage = 30;
        const apyPercentage = 90;
        const compoundingFrequency = 365;

        const timeToYield = calculateTimeToYield(totalItems, stakedPercentage, apyPercentage, compoundingFrequency);
        expect(timeToYield).toBe(1.33939616122524);
    });
});