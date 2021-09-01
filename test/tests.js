// IMPORT MODULES under test here:
import * as Calculate from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 11;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = Calculate.add(5, 6); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract function', (expect) => {
    const expected = -1; 
    const actual = Calculate.subtract(5, 6); // use your function here
    expect.equal(actual, expected);
});

test('multiply function', (expect) => {
    const expected = 27; 
    const actual = Calculate.multiply(3, 9); // use your function here
    expect.equal(actual, expected);
});

test('divide function', (expect) => {
    const expected = 3.5; 
    const actual = Calculate.divide(7, 2); // use your function here
    expect.equal(actual, expected);
});
