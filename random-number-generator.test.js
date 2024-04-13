const generateRandomNumber = require('./randomNumberGenerator');

test('generates a random number within the specified range', () => {
    const min = 1;
    const max = 10;
    const randomNumber = generateRandomNumber(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
});

test('handles negative range', () => {
    const min = -10;
    const max = -5;
    const randomNumber = generateRandomNumber(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
});

test('handles range of zero', () => {
    const min = 0;
    const max = 0;
    const randomNumber = generateRandomNumber(min, max);
    expect(randomNumber).toBe(min);
});