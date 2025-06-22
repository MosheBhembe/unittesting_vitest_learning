import { describe, test, it, expect } from 'vitest';
import { fizzBuzz, max, addTwoNumber } from './counter';

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    })

    test('if it returns the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2)
    })

    it('should return the first argument if argument are equal', () => {
        expect(max(1, 1)).toBe(1)
    })
})

describe('fizzBuzz', () => {
    test('if fizzbuzz returns FizzBuzz if the n is divisable by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })

    test('if fizz returns Fizz if the n is divisable by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })

    test('if fizzbuzz returns Buzz if the n is divisable by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })

    test('if fizzbuzz returns the number as a string if the n is not divisable by 3 or 5', () => {
        expect(fizzBuzz(2)).toBe('2');
    })
})

describe('addTwoNumber', () => {
    it('should return the sum of both a and b', () => {
        expect(addTwoNumber(1, 2)).toBe(3);
    })
})