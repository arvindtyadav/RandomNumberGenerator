const generateRandomNumber = require('./randomNumberGenerator');

// Test cases
function testGenerateRandomNumber() {
    console.log("Testing generateRandomNumber function...");

    // Test case 1
    const min1 = 1;
    const max1 = 10;
    const randomNumber1 = generateRandomNumber(min1, max1);
    if (randomNumber1 >= min1 && randomNumber1 <= max1) {
        console.log("Test case 1 passed");
    } else {
        console.error("Test case 1 failed");
    }

    // Test case 2
    const min2 = -10;
    const max2 = -5;
    const randomNumber2 = generateRandomNumber(min2, max2);
    if (randomNumber2 >= min2 && randomNumber2 <= max2) {
        console.log("Test case 2 passed");
    } else {
        console.error("Test case 2 failed");
    }

    // Test case 3
    const min3 = 0;
    const max3 = 0;
    const randomNumber3 = generateRandomNumber(min3, max3);
    if (randomNumber3 === min3) {
        console.log("Test case 3 passed");
    } else {
        console.error("Test case 3 failed");
    }
}

// Run tests
testGenerateRandomNumber();