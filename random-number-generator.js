function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFourDigitNonRepeatingNumber() {
    // Create an array containing digits from 0 to 9
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Shuffle the array
    for (let i = digits.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [digits[i], digits[j]] = [digits[j], digits[i]];
    }

    // Select the first four elements and form a number
    const randomNumber = digits.slice(0, 4).join('');
    
    return randomNumber;
}

module.exports = {
    generateRandomNumber,
    generateFourDigitNonRepeatingNumber}