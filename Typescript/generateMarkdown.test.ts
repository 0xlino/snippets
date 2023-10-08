import generateMarkdown from "./generateMarkdown";
import {expect, describe, it} from '@jest/globals';

describe('generateMarkdown', () => {
    it('should return markdown string', () => {
        const data = {
            title: 'Google',
            url: 'https://www.google.com',
            description: 'Search engine'
        }
        const markdown = generateMarkdown(data);
        expect(markdown).toBe('- [Google](https://www.google.com) - Search engine');
    });
});