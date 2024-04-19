const randomNoGenerator = require('./random-number-generator');

test('generates a random 4-digit number with no repeated digits', () => {
    const randomNumber = randomNoGenerator.generateFourDigitNonRepeatingNumber();
    
    // Check if the length of the number is 4
    expect(randomNumber.length).toBe(4);

    // Check if all digits are unique
    const uniqueDigits = new Set(randomNumber);
    expect(uniqueDigits.size).toBe(4);

    // Check if the number is numeric
    expect(Number.isNaN(Number(randomNumber))).toBe(false);
});