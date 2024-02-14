import {  main } from './main';
import * as assert from 'assert';


jest.mock('fs', () => ({
    readFileSync:jest.fn(() => ''),
}));

describe('main function', () => {
    it('should correctly add apple and orange', () => {
        const result = main(10);
        assert.strictEqual(result, 15);
    });

    it('should return apple when orange is not provided', () => {
        const result = main(0);
        assert.strictEqual(result, 5);
    });
});
