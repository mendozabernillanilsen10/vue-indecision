// sum.test.js
import {
  describe,
  expect,
  test,
} from 'vitest';

import {
  addArray,
  sum,
} from '../../src/helper/sum';

describe('add sumatoria', () => {
    test('adds 1 + 2 to equal 3', () => {
        const a =1;
        const b = 2;
        const result = sum(a,b);
        expect(result).toBe(3);
    });
});



describe('add array', () => {
    
    test('adds 1,2,3 = 6', () => {
        const result = addArray([1, 2, 3]);
        expect(result).toBe(6);
    });

    test('resultado cero', () => {
        const arr = [];
        const result = addArray(arr);
        expect(result).toBe(0);
    });


});


